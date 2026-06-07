"use client";

import { Button } from "@/components/ui/Button";
import { ProfileAvatar } from "@/components/ui/TechIllustration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  GraduationCap,
  Linkedin,
  MapPin,
} from "lucide-react";

const highlights = [
  { icon: Building2, text: "Gerente de Inteligencia de Datos — Banco Vimenca" },
  { icon: Award, text: "19+ años de experiencia" },
  { icon: MapPin, text: "Santo Domingo, RD" },
  { icon: GraduationCap, text: "Maestría en Datos y Big Data" },
];

export function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-gray-50/50 dark:bg-primary/30">
      <div className="container-custom">
        <SectionHeading title="¿Quién Soy?" />

        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex w-full"
          >
            <ProfileAvatar className="h-full w-full min-h-[28rem] sm:min-h-[32rem] lg:min-h-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Soy{" "}
              <strong className="text-primary dark:text-white">
                Francisco Paula González
              </strong>
              , especialista en Inteligencia de Negocios, Analítica de Datos,
              Automatización y Desarrollo Tecnológico, con más de{" "}
              <strong className="text-primary dark:text-white">
                19 años de experiencia
              </strong>{" "}
              creando soluciones que impulsan la eficiencia y el crecimiento
              empresarial.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Ayudo a empresas y emprendedores a automatizar procesos,
              desarrollar sistemas, construir dashboards estratégicos y
              convertir grandes volúmenes de datos en información útil para la
              toma de decisiones.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Mi experiencia abarca sectores financieros, comerciales, de
              servicios y de salud, donde he liderado proyectos de Business
              Intelligence, integración de datos, desarrollo web y optimización
              de procesos, logrando soluciones escalables y orientadas a
              resultados.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Si buscas transformar información en ventajas competitivas,
              reducir tareas manuales y tomar decisiones respaldadas por datos,
              puedo ayudarte a hacerlo realidad.
            </p>

            <div className="mt-6">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md">
                  <Linkedin className="h-4 w-4" />
                  Ver perfil en LinkedIn
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white p-3 dark:border-gray-700/60 dark:bg-primary/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-accent/10">
                      <Icon className="h-5 w-5 text-secondary dark:text-accent" />
                    </div>
                    <span className="text-sm font-medium text-primary dark:text-white">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
