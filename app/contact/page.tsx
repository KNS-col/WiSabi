import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { BrandName } from "@/components/brand-name";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = contactMetadata;

const contactItems = [
  {
    icon: Phone,
    title: "Directory Hotline",
    value: `Dial ${siteConfig.contact.hotline}`,
    href: `tel:${siteConfig.contact.hotline}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: "https://wa.me/23279442442",
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: siteConfig.contact.address,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={<>Contact <BrandName /></>}
        description="Reach us by phone, WhatsApp, email, or visit our Freetown office. We're here to help your business get found and grow."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="bg-primary/5 border-primary/15">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black mb-1">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-dark-gray hover:text-primary transition-colors whitespace-pre-line"
                          {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-dark-gray whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6 heading-accent">
                Send Us a Message
              </h2>
              <ContactForm />
              <Button
                asChild
                variant="outline"
                className="mt-6 w-full h-auto whitespace-normal text-center py-3 leading-snug"
              >
                <a
                  href={siteConfig.expressInterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Or express interest directly at wisabimapper.com/express-interest
                </a>
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black mb-6 heading-accent">
                Our Location
              </h2>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 bg-light-gray">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    siteConfig.contact.address
                  )}&output=embed`}
                  title="WiSabi office location on Google Maps"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
