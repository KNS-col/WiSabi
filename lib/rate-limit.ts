import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

function createRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

const redis = createRedis();

export const contactRateLimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "10 m"),
      analytics: true,
      prefix: "wisabi:contact",
    })
  : null;

/**
 * In-process fallback limiter, used when Upstash Redis isn't configured.
 * Only correct on a single persistent server instance (fine for a Render
 * "web" service, not for multi-instance/serverless deploys), and resets on
 * restart. Good enough to blunt basic spam without needing a paid Redis plan.
 */
const memoryHits = new Map<string, number[]>();

function checkMemoryLimit(
  key: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const hits = (memoryHits.get(key) || []).filter(
    (t) => now - t < windowMs
  );
  if (hits.length >= limit) {
    memoryHits.set(key, hits);
    return false;
  }
  hits.push(now);
  memoryHits.set(key, hits);

  // Occasionally sweep old entries so the map doesn't grow unbounded.
  if (memoryHits.size > 5000) {
    for (const [k, timestamps] of memoryHits) {
      if (timestamps.every((t) => now - t >= windowMs)) {
        memoryHits.delete(k);
      }
    }
  }

  return true;
}

const CONTACT_LIMIT = { limit: 3, windowMs: 10 * 60 * 1000 };

export async function checkRateLimit(
  limiter: Ratelimit | null,
  identifier: string
): Promise<{ success: boolean; message?: string }> {
  if (!limiter) {
    const success = checkMemoryLimit(
      `contact:${identifier}`,
      CONTACT_LIMIT.limit,
      CONTACT_LIMIT.windowMs
    );
    return success
      ? { success: true }
      : {
          success: false,
          message: "Too many requests. Please wait a moment and try again.",
        };
  }

  try {
    const { success } = await limiter.limit(identifier);
    if (!success) {
      return {
        success: false,
        message:
          "Too many requests. Please wait a moment and try again.",
      };
    }
    return { success: true };
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return { success: true };
  }
}

export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "anonymous";
  return ip;
}
