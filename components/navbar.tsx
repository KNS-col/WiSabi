"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  MapPin,
  Star,
  PhoneIncoming,
  Globe,
  Server,
  Mail,
  Bot,
  ShoppingCart,
  Share2,
  Headphones,
  PhoneOutgoing,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, services, siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, LucideIcon> = {
  MapPin,
  Star,
  PhoneIncoming,
  Globe,
  Server,
  Mail,
  Bot,
  ShoppingCart,
  Share2,
  Headphones,
  PhoneOutgoing,
  GraduationCap,
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [servicesOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)]",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-light-gray"
          : "bg-white border-b border-transparent"
      )}
    >
      <nav
        className="container-custom flex h-16 md:h-18 items-center justify-between pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] lg:pl-[max(2rem,env(safe-area-inset-left))] lg:pr-[max(2rem,env(safe-area-inset-right))]"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <div className="relative h-9 sm:h-10 w-[75px] sm:w-[84px] shrink-0">
            <Image
              src="/images/wisabi-logo-transparent.png"
              alt="WiSabi"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href === "/services" ? (
              <div key={link.href} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={cn(
                    "flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1",
                    pathname === "/services" ? "text-primary" : "text-black"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 mt-3 w-[640px] max-w-[92vw] rounded-2xl border border-light-gray bg-white shadow-xl p-4 animate-fade-in z-50">
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => {
                        const Icon = serviceIcons[service.icon];
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-off-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            <Icon
                              className="h-5 w-5 text-primary shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-black">
                                {service.title}
                              </p>
                              <p className="text-xs text-dark-gray mt-0.5 line-clamp-1">
                                {service.shortDescription}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-2 pt-3 border-t border-light-gray">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:underline rounded-md py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1",
                  pathname === link.href ? "text-primary" : "text-black"
                )}
              >
                {link.label}
              </Link>
            )
          )}
          <Button asChild size="default">
            <a
              href={siteConfig.expressInterestUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              List Your Business Free
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2.5 -mr-2.5 rounded-lg hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-light-gray bg-white animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-custom px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.href === "/services" ? (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href="/services"
                      className={cn(
                        "flex-1 px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                        pathname === "/services"
                          ? "text-primary bg-primary/5"
                          : "text-black hover:bg-off-white"
                      )}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      aria-expanded={mobileServicesOpen}
                      aria-label="Toggle services submenu"
                      className="p-3 rounded-lg hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-black transition-transform",
                          mobileServicesOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-0.5 animate-fade-in">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="px-4 py-2.5 rounded-lg text-sm text-dark-gray hover:bg-off-white hover:text-primary transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-black hover:bg-off-white"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2 px-4 flex flex-col gap-2">
              <Button asChild className="w-full">
                <a
                  href={siteConfig.expressInterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  List Your Business Free
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
