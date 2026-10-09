import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Heart,
  Lightbulb,
  MapPin,
  Users,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrandName } from "@/components/brand-name";
import { aboutMetadata } from "@/lib/metadata";
import { coreValues, images, siteConfig } from "@/lib/config";

export const metadata: Metadata = aboutMetadata;

const valueIcons = {
  Shield,
  Heart,
  Lightbulb,
  MapPin,
  Users,
  Clock,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={<>About <BrandName /></>}
        description="Built to make it simple for Sierra Leoneans to find trusted businesses, and just as simple for those businesses to be found."
        image={images.about}
        imageAlt="Customers checking their phones to find a business on WiSabi"
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-black mb-6 heading-accent">
            Who We Are
          </h2>
          <div className="space-y-4 text-lg text-dark-gray leading-relaxed">
            <p>
              <BrandName /> is Sierra Leone&apos;s national business directory and
              call centre. We help people find any business, product,
              or service by dialling <strong>{siteConfig.shortCode}</strong> from
              any network or visiting wisabi.sl.
            </p>
            <p>
              Our field officers visit businesses across the country, verify
              their information, and register them in the national directory.
              Customers then reach verified businesses through our trained
              agent team, connecting people with the services they need.
            </p>
            <p>
              <BrandName /> is a service of{" "}
              <strong>{siteConfig.poweredByFull}</strong> ({siteConfig.poweredBy}
              ), connecting people and empowering businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-off-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-black mb-6 heading-accent">
            Our Mission
          </h2>
          <blockquote className="text-xl font-medium text-black leading-relaxed border-l-4 border-primary pl-6 text-left">
            {siteConfig.mission}
          </blockquote>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-black mb-10 text-center heading-accent">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coreValues.map((value) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];
              return (
                <Card key={value.title} className="bg-primary/5 border-primary/15">
                  <CardContent className="p-6">
                    <Icon className="h-6 w-6 text-primary mb-3" aria-hidden="true" />
                    <h3 className="text-lg font-bold text-black mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-dark-gray">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call Centre */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images.team}
                alt="WiSabi call centre agent assisting a caller"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black mb-6 heading-accent">
                Our Call Centre
              </h2>
              <p className="text-lg text-dark-gray leading-relaxed mb-4">
                Every call to {siteConfig.shortCode} is handled by a trained
                agent backed by an intelligent knowledge base holding business
                info, FAQs, products, and service data.
              </p>
              <p className="text-dark-gray leading-relaxed mb-4">
                All systems run on local infrastructure in Sierra Leone. No data
                leaves the country. Open source, high capacity models power
                semantic search that finds the right answer even when callers
                don&apos;t use exact keywords.
              </p>
              <p className="text-dark-gray leading-relaxed">
                We also operate a full carrier grade call centre platform:
                ACD groups, IVR menus, short code hosting, and managed short
                code services for enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be the Business We Sabi Knows
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Express your interest to be onboarded. Our field officer will visit
            your business within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href={siteConfig.expressInterestUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Express Interest
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
