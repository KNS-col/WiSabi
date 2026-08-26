import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "WiSabi | Privacy Policy",
  description: "WiSabi privacy policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="pt-24 pb-16 section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-4 text-dark-gray">
          <p>
            This privacy policy page is a placeholder. Official privacy policy
            content should be added when provided by WiSabi legal counsel.
          </p>
          <p>
            WiSabi is committed to protecting the privacy and security of
            personal information collected through this website, including
            contact form submissions.
          </p>
        </div>
      </div>
    </section>
  );
}
