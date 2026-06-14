import {
  BarChart3,
  Building2,
  HeartPulse,
  Layers,
  MessageSquare,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const processSteps = [
  {
    step: 1,
    title: "Análisis de requerimientos",
    description:
      "Comprendo a fondo tus necesidades, objetivos y el contexto de tu negocio.",
  },
  {
    step: 2,
    title: "Diseño de solución",
    description:
      "Diseño una arquitectura técnica y un plan de acción adaptado a tus metas.",
  },
  {
    step: 3,
    title: "Desarrollo",
    description:
      "Implemento la solución con las mejores prácticas y tecnologías actuales.",
  },
  {
    step: 4,
    title: "Pruebas",
    description:
      "Valido cada funcionalidad para garantizar calidad y rendimiento óptimo.",
  },
  {
    step: 5,
    title: "Implementación",
    description:
      "Despliego la solución en producción y capacito a tu equipo si es necesario.",
  },
  {
    step: 6,
    title: "Soporte",
    description:
      "Brindo acompañamiento continuo para mantener y mejorar tu solución.",
  },
];

export const contactServices = [
  "Automatización Inteligente de Procesos",
  "Desarrollo Web",
  "Desarrollo de Soluciones Empresariales",
  "Inteligencia de Negocios y Analítica Avanzada",
  "Sector Salud — Web y Sistemas",
  "Consultoría Tecnológica",
  "Otro",
];

export const trustSectors = [
  "Sector bancario",
  "Sector salud",
  "Comercial",
  "Servicios",
];

export const trustTechnologies = [
  "Power BI",
  "SQL Server",
  "Python",
  "React",
  "Next.js",
];

export const impactMetrics = [
  { value: "19+", label: "Años de experiencia tecnológica" },
  { value: "80%+", label: "Reducción de tiempo en reportes automatizados" },
  { value: "4", label: "Sectores: banca, salud, comercial y servicios" },
  { value: "100%", label: "Enfoque en resultados medibles" },
];

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: "19+ años en entornos corporativos",
    description:
      "Experiencia en organizaciones exigentes donde la precisión, el cumplimiento y la calidad son críticos.",
    icon: Building2,
  },
  {
    title: "Experiencia en sector bancario e Inteligencia de Negocios",
    description:
      "Liderazgo en proyectos de BI, reportes regulatorios, dashboards ejecutivos y automatización de datos.",
    icon: BarChart3,
  },
  {
    title: "Enfoque en resultados de negocio",
    description:
      "No solo desarrollo tecnología: resuelvo problemas reales que ahorran tiempo, reducen errores y generan ingresos.",
    icon: TrendingUp,
  },
  {
    title: "Soluciones integrales",
    description:
      "Datos, automatización, desarrollo web y sistemas empresariales en un solo consultor senior.",
    icon: Layers,
  },
  {
    title: "Especialista en sector salud",
    description:
      "Webs profesionales, facturación ARS, turnos y sistemas para médicos y clínicas.",
    icon: HeartPulse,
  },
  {
    title: "Comunicación clara y acompañamiento",
    description:
      "Metodología estructurada, seguimiento en cada fase y soporte post-implementación.",
    icon: MessageSquare,
  },
];

export const technologies = [
  "Power BI",
  "SQL Server",
  "Python",
  "Excel",
  "SSIS",
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Git",
  "GitHub",
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María Rodríguez",
    role: "Directora de Operaciones",
    company: "Finanzas Plus RD",
    comment:
      "Francisco transformó nuestros procesos de reportes. Lo que antes tomaba días, ahora se genera automáticamente. Su profesionalismo y dominio técnico son excepcionales.",
  },
  {
    id: "2",
    name: "Ana Lucía Pérez",
    role: "Gerente General",
    company: "Consultorio Médico Salud Integral",
    comment:
      "Nuestra landing page superó todas las expectativas. Los contactos y reservas aumentaron significativamente desde el primer mes de lanzamiento.",
  },
  {
    id: "3",
    name: "Carlos Méndez",
    role: "CEO",
    company: "TechStart Dominicana",
    comment:
      "El dashboard ejecutivo que desarrolló nos permitió tomar decisiones basadas en datos reales. Incrementamos nuestra eficiencia operativa de forma notable.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "¿Trabajas con empresas y profesionales independientes?",
    answer:
      "Sí. Atiendo empresas, clínicas, consultorios médicos, instituciones financieras y emprendedores que necesitan soluciones tecnológicas profesionales.",
  },
  {
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Depende del alcance. Una landing page puede estar lista en 1–2 semanas. Dashboards, sistemas y automatizaciones requieren más tiempo según la complejidad.",
  },
  {
    question: "¿Ofreces soporte después de la entrega?",
    answer:
      "Sí. Todos los proyectos incluyen acompañamiento post-implementación para garantizar que la solución funcione correctamente.",
  },
  {
    question: "¿Puedo contratar solo un dashboard o solo una web?",
    answer:
      "Sí. Puedes contratar servicios de forma individual o solicitar una solución integral adaptada a tu negocio.",
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer:
      "Se acuerda según el proyecto, generalmente con anticipo y pagos por hitos de entrega.",
  },
  {
    question: "¿Atiendes fuera de República Dominicana?",
    answer:
      "Sí, trabajo de forma remota con clientes en República Dominicana y el exterior.",
  },
];

export const heroTrustBullets = [
  "Gerente de Inteligencia de Negocios en el sector bancario",
  "Power BI · SQL Server · Python · React · Next.js",
  "Especialista en soluciones para médicos, clínicas y empresas",
];
