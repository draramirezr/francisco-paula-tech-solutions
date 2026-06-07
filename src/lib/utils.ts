import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Francisco Paula Technology Solutions",
  slogan: "Transformando ideas y datos en soluciones tecnológicas.",
  description:
    "Especialista en Inteligencia de Negocios, Análisis de Datos, Automatización Inteligente de Procesos, Desarrollo Web y Desarrollo de Soluciones Empresariales en República Dominicana.",
  url: "https://franciscopaula.tech",
  email: "ing.fpaula@gmail.com",
  phone: "+1 (829) 844-6360",
  whatsapp: "18298446360",
  linkedin:
    "https://www.linkedin.com/in/francisco-paula-gonzalez-632324a4/",
  location: "Santo Domingo, República Dominicana",
};

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];
