import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "WiSabi | Terms & Conditions",
  description: "WiSabi terms and conditions.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="pt-24 pb-16 section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-bold text-black mb-8">
          Terms & Conditions
        </h1>
        <div className="prose prose-gray max-w-none space-y-4 text-dark-gray">
          <p>
            This terms and conditions page is a placeholder. Official terms
            should be added when provided by WiSabi legal counsel.
          </p>
          <p>
            By using the WiSabi website and services, users agree to comply
            with applicable terms governing use of the platform and contact
            services.
          </p>
        </div>
      </div>
    </section>
  );
}
