import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

const baseUrl = siteConfig.url;

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_SL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const homeMetadata = createMetadata({
  title: "WiSabi | Business Directory & Call Centre",
  description: siteConfig.description,
  path: "/",
});

export const aboutMetadata = createMetadata({
  title: "WiSabi | About Us",
  description:
    "Sierra Leone's trusted business directory and call centre, connecting customers with verified businesses nationwide.",
  path: "/about",
});

export const servicesMetadata = createMetadata({
  title: "WiSabi | Services",
  description:
    "Free business listings, call centre on 3999, digital services, managed short codes, and enterprise call centre platform.",
  path: "/services",
});

export const contactMetadata = createMetadata({
  title: "WiSabi | Contact Us",
  description:
    "Contact WiSabi. Dial 3999, call +232 32 442442, WhatsApp 079 442 442, or visit 18 Dundas Street, Freetown.",
  path: "/contact",
});
