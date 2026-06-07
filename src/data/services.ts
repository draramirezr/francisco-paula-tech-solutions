import {
  BarChart3,
  Bot,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "automatizacion",
    title: "Automatización Inteligente de Procesos",
    description:
      "Eliminamos tareas manuales y repetitivas mediante soluciones automatizadas que ahorran tiempo, reducen errores y aumentan la productividad de tu negocio.",
    icon: Bot,
    features: [
      "Automatización de reportes",
      "Procesamiento masivo de Excel",
      "Integración de múltiples fuentes de datos",
      "Envío automático de correos",
      "Actualización automática de información",
      "Flujos de trabajo personalizados",
    ],
  },
  {
    id: "web",
    title: "Desarrollo de Páginas Web",
    description:
      "Creamos sitios web modernos, rápidos y diseñados para atraer clientes, generar confianza y potenciar el crecimiento de tu negocio.",
    icon: Globe,
    features: [
      "Landing Pages para captar clientes",
      "Sitios web corporativos",
      "Catálogos digitales de productos y servicios",
      "Formularios inteligentes y automatizados",
      "Integración con WhatsApp y redes sociales",
      "Chatbots para atención al cliente",
      "Portafolios profesionales",
    ],
  },
  {
    id: "sistemas",
    title: "Desarrollo de Soluciones Empresariales",
    description:
      "Desarrollo de aplicaciones personalizadas que automatizan procesos y resuelven necesidades específicas de empresas, clínicas y profesionales.",
    icon: Code2,
    features: [
      "Sistemas de facturación médica para ARS",
      "Sistemas de gestión de turnos y atención",
      "Aplicaciones para control y seguimiento de procesos",
      "Soluciones web personalizadas",
      "Integración con bases de datos",
      "Automatización de procesos operativos",
    ],
  },
  {
    id: "datos",
    title: "Inteligencia de Negocios y Analítica Avanzada",
    description:
      "Diseño soluciones analíticas que transforman datos complejos en indicadores claros para impulsar el crecimiento de tu negocio.",
    icon: BarChart3,
    features: [
      "Dashboards ejecutivos e interactivos",
      "Indicadores clave de desempeño (KPIs)",
      "Automatización de reportes gerenciales",
      "Integración y consolidación de datos",
      "Análisis de tendencias y comportamiento",
      "Modelos de datos para decisiones estratégicas",
    ],
  },
];

export type ProjectCategory = "automatizacion" | "web" | "sistemas" | "datos";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  technologies: string[];
  result: string;
  icon: LucideIcon;
}

export const projects: Project[] = [
  {
    id: "reportes-bancarios",
    title: "Automatización de Reportes Bancarios",
    category: "automatizacion",
    technologies: ["Python", "SQL Server", "Excel"],
    result: "Reducción del tiempo de elaboración de reportes en más del 80%.",
    icon: Bot,
  },
  {
    id: "excel-masivo",
    title: "Procesamiento Masivo de Archivos Excel",
    category: "automatizacion",
    technologies: ["Python", "Pandas"],
    result: "Automatización de consolidación de miles de registros.",
    icon: Database,
  },
  {
    id: "landing-medico",
    title: "Landing Page para Consultorio Médico",
    category: "web",
    technologies: ["React", "Tailwind"],
    result: "Incremento de contactos y reservas.",
    icon: Globe,
  },
  {
    id: "portal-corporativo",
    title: "Portal Empresarial Corporativo",
    category: "web",
    technologies: ["Next.js"],
    result: "Mayor presencia digital.",
    icon: LayoutDashboard,
  },
  {
    id: "inventario",
    title: "Sistema de Inventario",
    category: "sistemas",
    technologies: ["React", "SQL Server"],
    result: "Control total de existencias.",
    icon: Code2,
  },
  {
    id: "crm",
    title: "Sistema de Gestión de Clientes",
    category: "sistemas",
    technologies: ["React", "Node.js"],
    result: "Seguimiento eficiente de clientes.",
    icon: Database,
  },
  {
    id: "dashboard-ejecutivo",
    title: "Dashboard Ejecutivo",
    category: "datos",
    technologies: ["Power BI"],
    result: "Visualización de KPIs estratégicos.",
    icon: BarChart3,
  },
  {
    id: "dashboard-financiero",
    title: "Dashboard Financiero",
    category: "datos",
    technologies: ["Power BI", "SQL Server"],
    result: "Monitoreo de indicadores financieros.",
    icon: LayoutDashboard,
  },
];

export const projectCategories = [
  { id: "todos", label: "Todos" },
  { id: "automatizacion", label: "Automatización" },
  { id: "web", label: "Web" },
  { id: "sistemas", label: "Sistemas" },
  { id: "datos", label: "Datos" },
] as const;

export type ProjectFilter = (typeof projectCategories)[number]["id"];

export const categoryLabels: Record<ProjectCategory, string> = {
  automatizacion: "Automatización",
  web: "Web",
  sistemas: "Sistemas",
  datos: "Datos",
};
