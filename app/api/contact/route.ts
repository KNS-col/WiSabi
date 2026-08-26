import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/brevo";
import { sanitizeInput } from "@/lib/utils";
import {
  contactRateLimit,
  checkRateLimit,
  getClientIdentifier,
} from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const identifier = getClientIdentifier(request);
    const rateCheck = await checkRateLimit(contactRateLimit, identifier);

    if (!rateCheck.success) {
      return NextResponse.json(
        { success: false, message: rateCheck.message },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.errors[0]?.message || "Invalid form data",
        },
        { status: 400 }
      );
    }

    const sanitized = {
      fullName: sanitizeInput(parsed.data.fullName),
      email: sanitizeInput(parsed.data.email),
      phone: sanitizeInput(parsed.data.phone),
      subject: sanitizeInput(parsed.data.subject),
      message: sanitizeInput(parsed.data.message),
    };

    const result = await sendContactEmail(sanitized);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
