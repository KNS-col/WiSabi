import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
  cta?: {
    label: string;
    href: string;
    variant?: "default" | "outline";
  };
  dark?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  cta,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden",
        dark ? "bg-black" : "bg-off-white"
      )}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid gap-10 items-center",
            image ? "lg:grid-cols-2" : "max-w-3xl"
          )}
        >
          <div className="animate-slide-up">
            {eyebrow && (
              <p
                className={cn(
                  "text-xs md:text-sm font-bold uppercase tracking-widest mb-4",
                  dark ? "text-primary" : "text-primary"
                )}
              >
                {eyebrow}
              </p>
            )}
            <h1
              className={cn(
                "text-4xl md:text-5xl font-bold leading-tight mb-6",
                dark ? "text-white" : "text-black"
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "text-lg leading-relaxed mb-8",
                dark ? "text-white/70" : "text-dark-gray"
              )}
            >
              {description}
            </p>
            {cta && (
              <Button
                asChild
                variant={cta.variant || "default"}
                size="lg"
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            )}
          </div>

          {image && (
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <Image
                src={image}
                alt={imageAlt || ""}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
