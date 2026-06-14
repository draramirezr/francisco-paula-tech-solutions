import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Francisco Paula Data & Technology Solutions",
  brandName: "Francisco Paula",
  brandTagline: "Data & Technology Solutions",
  slogan: "Transformando ideas y datos en soluciones tecnológicas.",
  description:
    "Consultor senior en Inteligencia de Negocios, Power BI, SQL Server, Automatización y Desarrollo Web. 19+ años de experiencia en sector bancario y salud. República Dominicana.",
  url: "https://franciscopaula.tech",
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
  { href: "#servicios", label: "Servicios" },
  { href: "#salud", label: "Salud" },
  { href: "#casos", label: "Casos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];
