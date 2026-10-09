import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandName } from "@/components/brand-name";
import { createMetadata } from "@/lib/metadata";
import { services, siteConfig } from "@/lib/config";
import { serviceDetails } from "@/lib/service-details";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return createMetadata({
      title: "WiSabi | Services",
      description: "WiSabi services.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: `WiSabi | ${service.title}`,
    description: service.shortDescription,
    path: `/services/${service.id}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) {
    notFound();
  }

  const ctaHref =
    detail.ctaHref === "expressInterest"
      ? siteConfig.expressInterestUrl
      : detail.ctaHref;
  const ctaIsExternal = detail.ctaHref === "expressInterest";

  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 md:pb-20 bg-off-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark-gray hover:text-primary transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
                {service.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {detail.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg text-dark-gray leading-relaxed">
                {detail.intro}
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white p-10 animate-fade-in">
              <Image
                src={detail.heroImage}
                alt={detail.heroImageAlt}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment options (ecommerce only) */}
      {detail.paymentOptions && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-black mb-6 text-center heading-accent">
              Integrated Payment Options
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {detail.paymentOptions.map((option) => (
                <div
                  key={option.label}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/5 border border-primary/15"
                >
                  <span className="text-xl" aria-hidden="true">
                    {option.emoji}
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Training modules table (training only) */}
      {detail.trainingModules && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-black mb-6 text-center heading-accent">
              Training Modules
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-light-gray">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="bg-off-white">
                    <th className="p-4 text-sm font-bold text-black">Module</th>
                    <th className="p-4 text-sm font-bold text-black">
                      What Staff Learn
                    </th>
                    <th className="p-4 text-sm font-bold text-black whitespace-nowrap">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.trainingModules.map((row, i) => (
                    <tr
                      key={row.module}
                      className={i % 2 === 0 ? "bg-white" : "bg-off-white/50"}
                    >
                      <td className="p-4 text-sm font-semibold text-black align-top whitespace-nowrap">
                        {row.module}
                      </td>
                      <td className="p-4 text-sm text-dark-gray align-top">
                        {row.learn}
                      </td>
                      <td className="p-4 text-sm text-primary font-semibold align-top whitespace-nowrap">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Comparison table (priority-listings only) */}
      {detail.comparisonTable && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-black mb-6 text-center heading-accent">
              {detail.comparisonTable.title}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-light-gray max-w-2xl mx-auto">
              <table className="w-full min-w-[480px] text-left border-collapse">
                <thead>
                  <tr className="bg-off-white">
                    <th className="p-4 text-sm font-bold text-black">Feature</th>
                    <th className="p-4 text-sm font-bold text-black text-center">
                      Free Listing
                    </th>
                    <th className="p-4 text-sm font-bold text-primary text-center">
                      Priority Listing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.comparisonTable.rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-off-white/50"}
                    >
                      <td className="p-4 text-sm text-dark-gray">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center">
                        {row.free ? (
                          <Check
                            className="h-4 w-4 text-success inline"
                            aria-label="Included"
                          />
                        ) : (
                          <X
                            className="h-4 w-4 text-dark-gray/30 inline"
                            aria-label="Not included"
                          />
                        )}
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        {row.priority ? (
                          <Check
                            className="h-4 w-4 text-primary inline"
                            aria-label="Included"
                          />
                        ) : (
                          <X
                            className="h-4 w-4 text-dark-gray/30 inline"
                            aria-label="Not included"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-10 text-center heading-accent">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {detail.features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-bold text-black mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-dark-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 heading-accent">
            Who Is This For?
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {detail.whoFor.map((who) => (
              <span
                key={who}
                className="px-4 py-2 rounded-full bg-primary/5 border border-primary/15 text-sm font-medium text-dark-gray"
              >
                {who}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 max-w-2xl mx-auto">
            {detail.ctaHeadline}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {detail.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              {ctaIsExternal ? (
                <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                  {detail.ctaButtonLabel}
                </a>
              ) : (
                <Link href={ctaHref}>{detail.ctaButtonLabel}</Link>
              )}
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
          <p className="text-white/40 text-sm mt-8">
            Have a question first? Talk to the <BrandName /> team.
          </p>
        </div>
      </section>
    </>
  );
}
