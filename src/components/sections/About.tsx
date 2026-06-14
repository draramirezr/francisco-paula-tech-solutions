"use client";

import { SectionWhatsApp } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { ProfileAvatar } from "@/components/ui/TechIllustration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Linkedin,
} from "lucide-react";

const highlights = [
  {
    icon: HeartPulse,
    text: "Especialista en tecnología para el sector salud",
  },
  {
    icon: BarChart3,
    text: "Analista de datos senior — BI, Power BI y analítica",
  },
  { icon: GraduationCap, text: "Ingeniero en Sistema y Computación" },
  { icon: BookOpen, text: "Maestría en Ciencias de Datos" },
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
            <ProfileAvatar className="h-full w-full min-h-[20rem] sm:min-h-[28rem] lg:min-h-full" />
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
              ,{" "}
              <strong className="text-primary dark:text-white">
                analista de datos senior
              </strong>{" "}
              y consultor tecnológico. Llevo más de{" "}
              <strong className="text-primary dark:text-white">
                19 años
              </strong>{" "}
              transformando datos en decisiones estratégicas con Power BI, SQL
              Server, Python y Business Intelligence en entornos corporativos y
              financieros.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Mi{" "}
              <strong className="text-primary dark:text-white">
                nicho principal es el sector salud
              </strong>
              : ayudo a médicos y clínicas con webs profesionales, sistemas de
              turnos, facturación ARS, WhatsApp y dashboards que mejoran la
              operación del consultorio.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Combino experiencia profunda en analítica de datos con desarrollo
              web y automatización, para ofrecer soluciones completas tanto a
              profesionales de la salud como a empresas que necesitan reportes,
              dashboards y sistemas confiables.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Si buscas un consultor que domine datos y tecnología — ya sea para
              tu consultorio o tu empresa — puedo ayudarte a hacerlo realidad.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
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
              <SectionWhatsApp
                className="mt-0 justify-start"
                message="Hola, leí sobre usted y me interesa una consulta"
                label="Escríbeme por WhatsApp"
              />
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
