import { faqItems } from "@/data/content";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/utils";
import type { Metadata } from "next";

export const siteUrl = siteConfig.url;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.seoDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.brandName, url: siteUrl }],
  creator: siteConfig.brandName,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: siteUrl,
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.brandTagline,
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    image: `${siteUrl}/favicon.svg`,
    description: siteConfig.seoDescription,
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santo Domingo",
      addressCountry: "DO",
    },
    areaServed: [
      { "@type": "Country", name: "República Dominicana" },
      { "@type": "Place", name: "Internacional (remoto)" },
    ],
    sameAs: [siteConfig.linkedin],
    founder: {
      "@type": "Person",
      name: "Francisco Paula González",
      jobTitle: "Analista de datos senior y consultor tecnológico — sector salud",
      url: siteConfig.linkedin,
    },
    knowsAbout: [
      "Tecnología para sector salud",
      "Páginas web para médicos y clínicas",
      "Sistemas de turnos médicos",
      "Facturación ARS",
      "Inteligencia de Negocios",
      "Power BI",
      "Automatización",
      "Desarrollo Web",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios tecnológicos",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description: siteConfig.seoDescription,
    inLanguage: "es-DO",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Francisco Paula González",
    jobTitle: "Analista de datos senior — BI, Power BI y sector salud",
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santo Domingo",
      addressCountry: "DO",
    },
    sameAs: [siteConfig.linkedin],
    worksFor: { "@id": `${siteUrl}/#organization` },
    knowsAbout: [
      "Sector salud",
      "Webs para consultorios médicos",
      "Sistemas clínicos",
      "Business Intelligence",
      "Power BI",
      "Automatización de procesos",
      "Desarrollo Web",
    ],
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
