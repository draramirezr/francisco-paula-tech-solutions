"use client";

import { Button } from "@/components/ui/Button";
import { TechIllustration } from "@/components/ui/TechIllustration";
import { SectionWhatsApp } from "@/components/ui/WhatsAppButton";
import { heroTrustBullets } from "@/data/content";
import { motion } from "framer-motion";
import { Calendar, Check, Stethoscope } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="inicio" className="section-padding relative overflow-hidden !pt-28 lg:!pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-secondary/5" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-500/10 dark:text-emerald-400 sm:mb-6 sm:px-4 sm:text-sm">
              <Stethoscope className="h-4 w-4 shrink-0" />
              <span className="text-balance">
                Analista de datos senior · Especialista en sector salud · 19+ años
              </span>
            </div>

            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-primary dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Analítica de datos senior y tecnología para{" "}
              <span className="gradient-text">médicos, clínicas y empresas</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-text-secondary dark:text-text-dark-secondary sm:mt-6 sm:text-lg">
              Soy{" "}
              <strong className="text-primary dark:text-white">
                Francisco Paula González
              </strong>
              , analista de datos senior y consultor tecnológico. En el día a
              día trabajo con{" "}
              <strong className="text-primary dark:text-white">
                Power BI, SQL Server, Python y Business Intelligence
              </strong>
              ; mi nicho principal es el{" "}
              <strong className="text-primary dark:text-white">sector salud</strong>
              , donde ayudo a médicos y clínicas con webs, sistemas, turnos y
              digitalización.
            </p>

            <ul className="mt-6 space-y-2">
              {heroTrustBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-secondary dark:text-text-dark-secondary sm:text-base"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="#salud" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  <Stethoscope className="h-4 w-4" />
                  Quiero mi web para consultorio
                </Button>
              </Link>
              <Link href="#contacto" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Calendar className="h-4 w-4" />
                  Agendar consulta gratuita
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-sm text-text-secondary dark:text-text-dark-secondary">
              Respuesta en menos de 24 horas · Consulta inicial sin compromiso
            </p>

            <SectionWhatsApp
              className="mt-6 justify-start sm:mt-8"
              message="Hola, soy médico y me interesa una consulta"
              label="Escríbeme por WhatsApp"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <TechIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
