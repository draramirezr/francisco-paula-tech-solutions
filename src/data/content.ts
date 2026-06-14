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
  "Sector Salud — Web y Sistemas para consultorios",
  "Desarrollo Web",
  "Desarrollo de Soluciones Empresariales",
  "Inteligencia de Negocios y Analítica Avanzada",
  "Automatización Inteligente de Procesos",
  "Consultoría Tecnológica",
  "Otro",
];

export const trustSectors = [
  "Sector salud",
  "Sector bancario",
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
    title: "Especialista en sector salud",
    description:
      "Webs profesionales, facturación ARS, turnos, WhatsApp y sistemas para médicos, clínicas y consultorios.",
    icon: HeartPulse,
  },
  {
    title: "Analista de datos senior",
    description:
      "Business Intelligence, Power BI, SQL Server, dashboards ejecutivos, reportes automatizados y analítica avanzada.",
    icon: BarChart3,
  },
  {
    title: "19+ años en entornos corporativos",
    description:
      "Experiencia en sector financiero y organizaciones exigentes donde la precisión y el cumplimiento son críticos.",
    icon: Building2,
  },
  {
    title: "Enfoque en resultados",
    description:
      "Más pacientes y mejor operación para clínicas; menos tareas manuales y decisiones basadas en datos para empresas.",
    icon: TrendingUp,
  },
  {
    title: "Soluciones integrales",
    description:
      "Datos, automatización, desarrollo web y sistemas empresariales en un solo consultor senior.",
    icon: Layers,
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
    id: "2",
    name: "Ana Lucía Pérez",
    role: "Gerente General",
    company: "Consultorio Médico Salud Integral",
    comment:
      "Nuestra landing page superó todas las expectativas. Los contactos y reservas aumentaron significativamente desde el primer mes de lanzamiento.",
  },
  {
    id: "1",
    name: "María Rodríguez",
    role: "Directora de Operaciones",
    company: "Finanzas Plus RD",
    comment:
      "Francisco transformó nuestros procesos de reportes. Lo que antes tomaba días, ahora se genera automáticamente. Su profesionalismo y dominio técnico son excepcionales.",
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
    question: "¿Trabajas específicamente con médicos y clínicas?",
    answer:
      "Sí, el sector salud es mi enfoque principal. Desarrollo webs para consultorios, sistemas de turnos, integración con WhatsApp, facturación ARS y soluciones de datos para clínicas y profesionales médicos.",
  },
  {
    question: "¿Cuánto tarda una web para mi consultorio?",
    answer:
      "Una landing page profesional puede estar lista en 1–2 semanas. Sistemas con turnos, facturación o integraciones requieren más tiempo según el alcance.",
  },
  {
    question: "¿Ofreces soporte después de la entrega?",
    answer:
      "Sí. Todos los proyectos incluyen acompañamiento post-implementación para garantizar que la solución funcione correctamente.",
  },
  {
    question: "¿Puedo contratar solo la web o también dashboards y sistemas?",
    answer:
      "Sí. Puedes contratar servicios de forma individual — solo web, solo BI — o una solución integral para tu consulta o clínica.",
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer:
      "Se acuerda según el proyecto, generalmente con anticipo y pagos por hitos de entrega.",
  },
  {
    question: "¿Atiendes fuera de República Dominicana?",
    answer:
      "Sí, trabajo de forma remota con médicos y clínicas en República Dominicana y el exterior.",
  },
];

export const heroTrustBullets = [
  "Analista de datos senior — Power BI · SQL Server · Python · BI",
  "Nicho principal: webs, turnos y sistemas para médicos y clínicas",
  "19+ años en sector financiero, salud y empresas",
];
