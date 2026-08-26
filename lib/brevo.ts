import { siteConfig } from "@/lib/config";

interface SendContactEmailParams {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(
  params: SendContactEmailParams
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || siteConfig.name;

  if (!apiKey || !senderEmail) {
    console.error("Brevo configuration missing");
    return {
      success: false,
      error: "Email service is not configured. Please try again later.",
    };
  }

  const htmlContent = `
    <h2>New Contact Form Submission: ${siteConfig.name}</h2>
    <p><strong>Name:</strong> ${escapeHtml(params.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(params.phone)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(params.subject)}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(params.message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: siteConfig.contact.email, name: siteConfig.name }],
        replyTo: { email: params.email, name: params.fullName },
        subject: `[Contact Form] ${params.subject}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Brevo API error:", errorData);
      return {
        success: false,
        error: "Failed to send message. Please try again later.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Brevo send error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char] || char);
}
