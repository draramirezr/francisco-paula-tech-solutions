"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Globe,
  HeartPulse,
  MessageCircle,
  Receipt,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const healthServices = [
  {
    icon: Globe,
    title: "Presencia digital profesional",
    description:
      "Sitios web modernos que transmiten confianza y facilitan que los pacientes te encuentren y contacten.",
  },
  {
    icon: Receipt,
    title: "Facturación médica ARS",
    description:
      "Soluciones para agilizar procesos de facturación y gestión con aseguradoras de salud.",
  },
  {
    icon: CalendarCheck,
    title: "Gestión de turnos",
    description:
      "Sistemas para organizar citas, horarios y atención al paciente de forma eficiente.",
  },
  {
    icon: MessageCircle,
    title: "Contacto inmediato",
    description:
      "Integración con WhatsApp y formularios para que tus pacientes agenden sin fricción.",
  },
];

export function HealthSector() {
  return (
    <section
      id="salud"
      className="section-padding relative overflow-hidden bg-gray-50/50 dark:bg-primary/30"
    >
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container-custom relative">
        <SectionHeading
          title="Experiencia en el Sector Salud"
          subtitle="Soluciones tecnológicas diseñadas para médicos, clínicas y profesionales de la salud"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              <HeartPulse className="h-4 w-4" />
              Especialización en salud
            </div>

            <p className="text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Cuento con gran experiencia en el{" "}
              <strong className="text-primary dark:text-white">
                sector de la salud
              </strong>
              , desarrollando soluciones que optimizan procesos clínicos,
              administrativos y digitales para consultorios, clínicas y
              profesionales médicos.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary dark:text-text-dark-secondary">
              Me dedico a ayudar a médicos a fortalecer su presencia digital
              mediante{" "}
              <strong className="text-primary dark:text-white">
                páginas web profesionales y modernas
              </strong>
              , diseñadas para generar confianza, atraer pacientes y facilitar
              la comunicación con tu consulta.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#contacto">
                <Button size="lg">
                  Quiero mi web para consultorio
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a
                href={getWhatsAppUrl(
                  "Hola, soy médico y me interesa una página web profesional"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {healthServices.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-primary dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-3 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 px-6 py-5 text-center dark:from-emerald-500/10 dark:to-teal-500/10"
        >
          <Stethoscope className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-sm font-medium text-primary dark:text-white sm:text-base">
            ¿Eres médico o tienes un consultorio? Transforma tu práctica con
            tecnología pensada para el sector salud.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
