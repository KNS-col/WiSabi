import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GitBranch,
  Search,
  Menu,
  PhoneForwarded,
  BarChart3,
  Hash,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { servicesMetadata } from "@/lib/metadata";
import {
  services,
  callCentreFeatures,
  images,
  siteConfig,
} from "@/lib/config";
import { serviceDetails } from "@/lib/service-details";

export const metadata: Metadata = servicesMetadata;

const featureIcons = {
  GitBranch,
  Search,
  Menu,
  PhoneForwarded,
  BarChart3,
  Hash,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services Built for Sierra Leone's Businesses"
        description="From free directory listings to enterprise call centre platforms, chatbots, and full digital transformation, WiSabi helps you grow."
        image={images.services}
        imageAlt="A business owner celebrating growth with WiSabi"
      />

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const emoji = serviceDetails[service.id]?.emoji;

              return (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <Card className="bg-primary/5 border-primary/15 h-full transition-shadow hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div
                        className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4"
                        aria-hidden="true"
                      >
                        {emoji}
                      </div>
                      <h2 className="text-lg font-bold text-black mb-2">
                        {service.title}
                      </h2>
                      <p className="text-sm text-dark-gray leading-relaxed mb-4 flex-1">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Learn More
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call Centre Platform Features */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 heading-accent">
              Enterprise Call Centre Platform
            </h2>
            <p className="text-dark-gray">
              Carrier grade features included: ACD, IVR, call hunting, live
              monitoring, and short code hosting on short code{" "}
              <span className="font-bold text-primary">{siteConfig.shortCode}</span>.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {callCentreFeatures.map((feature) => {
              const Icon =
                featureIcons[feature.icon as keyof typeof featureIcons];
              return (
                <Card key={feature.title} className="bg-primary/5 border-primary/15">
                  <CardContent className="p-6">
                    <Icon className="h-7 w-7 text-primary mb-4" aria-hidden="true" />
                    <h3 className="font-bold text-black mb-2">{feature.title}</h3>
                    <p className="text-sm text-dark-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workplace Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images.workplace}
              alt="Enterprise team collaborating around a boardroom table"
              fill
              className="object-cover object-[center_21%]"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Listed or Outsource Your Helpline?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact us to discuss your business listing, short code, or custom
            service package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href={siteConfig.expressInterestUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                List Your Business Free
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
