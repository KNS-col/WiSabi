import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { DirectorySearchPreview } from "@/components/directory-search-preview";
import { HowItWorksFlow } from "@/components/how-it-works-flow";
import { AIAssistant } from "@/components/ai-assistant";
import { BrandName } from "@/components/brand-name";
import { siteConfig, whyWiSabi, images } from "@/lib/config";

export default function HomePage() {
  const stats = siteConfig.statistics;

  return (
    <>
      <Hero />
      <DirectorySearchPreview />
      <HowItWorksFlow />
      <AIAssistant />

      {/* Stats bar */}
      <section className="py-10 bg-black border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { value: stats.shortCode, label: stats.shortCodeLabel },
              { value: stats.listing, label: stats.listingLabel },
              { value: stats.ai, label: stats.aiLabel },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why WiSabi */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 heading-accent">
                Why Businesses Love <BrandName />
              </h2>
              <p className="text-lg text-primary font-semibold mb-8">
                Get Discovered. Get Connected. Get Growing.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyWiSabi.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-sm text-dark-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images.callCenter}
                alt="Sierra Leoneans connected by WiSabi"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              List Your Business for FREE
            </h2>
            <p className="text-lg text-white/70 mb-2">
              It is completely free to be listed. No commitment · No monthly fee.
            </p>
            <p className="text-white/50 mb-8">
              Join Sierra Leone&apos;s most comprehensive business directory and
              start getting discovered today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a
                  href={siteConfig.expressInterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Express Interest Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
