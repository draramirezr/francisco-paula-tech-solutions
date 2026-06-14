import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Francisco Paula Data & Technology Solutions",
  brandName: "Francisco Paula",
  brandTagline: "Data & Technology Solutions",
  slogan: "Analista de datos senior y tecnología para el sector salud y empresas.",
  seoTitle:
    "Francisco Paula | Analista de Datos Senior y Tecnología para Salud",
  seoDescription:
    "Francisco Paula González — analista de datos senior (Power BI, SQL Server, BI) con enfoque en sector salud: webs para consultorios, sistemas, dashboards y automatización. 19+ años de experiencia. Santo Domingo, RD.",
  description:
    "Analista de datos senior y consultor tecnológico. Experiencia en BI, Power BI y analítica avanzada, con enfoque principal en sector salud: webs, sistemas y digitalización para médicos y clínicas.",
  url: "https://franciscopaula.com",
  keywords: [
    "analista de datos senior República Dominicana",
    "consultor Power BI Santo Domingo",
    "inteligencia de negocios RD",
    "páginas web para médicos",
    "consultorio médico web",
    "sistemas para clínicas",
    "facturación ARS médicos",
    "Business Intelligence sector salud",
    "dashboards Power BI",
    "Francisco Paula analista datos",
    "automatización reportes",
    "Data & Technology Solutions",
  ],
  email: "ing.fpaula@gmail.com",
  phone: "+1 (829) 844-8360",
  phoneTel: "+18298448360",
  whatsapp: "18298448360",
  linkedin:
    "https://www.linkedin.com/in/francisco-paula-gonzalez-632324a4/",
  location: "Santo Domingo, República Dominicana",
};

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#salud", label: "Salud" },
  { href: "#servicios", label: "Servicios" },
  { href: "#casos", label: "Casos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];
