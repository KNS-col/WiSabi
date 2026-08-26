import Link from "next/link";
import Image from "next/image";
import { BrandName } from "@/components/brand-name";
import { siteConfig, services } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-10 w-[84px]">
                <Image
                  src="/images/wisabi-logo-transparent.png"
                  alt="WiSabi"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm font-semibold text-white/80 leading-relaxed mb-2">
              {siteConfig.krioTagline}
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Sierra Leone&apos;s trusted national business directory and
              call centre, connecting customers with verified
              businesses nationwide.
            </p>
            <p className="text-xs text-white/50 mt-3">
              A service of {siteConfig.poweredByFull} ({siteConfig.poweredBy})
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="text-sm text-white/70 hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <span className="text-primary font-bold">Dial {siteConfig.contact.hotline}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/23279442442`} className="hover:text-primary transition-colors">
                  WhatsApp {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-white/50 text-center sm:text-left">
            <span>© {currentYear} <BrandName /> · All rights reserved</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/40">
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
