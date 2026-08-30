"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig, images } from "@/lib/config";

export function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-2 text-balance">
              {siteConfig.krioTagline}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
              WiSabi go help yu fen am.
            </p>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-dark-gray leading-relaxed mb-8 max-w-xl">
              <p>
                WiSabi na Sierra Leone business directory and call centre wey
                de help yu find wetin yu need, wen yu need am.
              </p>

              <div
                className={`${expanded ? "block" : "hidden"} md:block space-y-3 md:space-y-4`}
              >
                <p>
                  Yu de luk fɔ business? Product? Service? Hotel? Restaurant?
                  Shop? Or yu just need somebody wey yu fit call fɔ get the
                  right information?
                </p>
                <p>
                  Just call {siteConfig.shortCode}. Our call centre team de
                  ready fɔ listen to yu, understand wetin yu de luk fɔ, and
                  help yu get the right business or service.
                </p>
                <p>
                  Yu kin also visit WiSabi.sl and search for businesses and
                  services around Sierra Leone.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="md:hidden text-primary font-semibold text-sm underline underline-offset-2"
              >
                {expanded ? "Show less" : "Read more"}
              </button>

              <p>
                No need fɔ ask everybody. No need fɔ waste time. If yu de
                luk fɔ am, WiSabi go help yu fen am.
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Services</Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.hero}
                alt="WiSabi team members collaborating at work"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center justify-between">
                  <p className="text-primary font-bold text-2xl sm:text-3xl">
                    Call {siteConfig.shortCode}
                  </p>
                  <p className="text-white/70 text-sm text-right hidden sm:block">
                    Works on all networks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
