"use client";

import { Button } from "@/components/ui/Button";
import { TechIllustration } from "@/components/ui/TechIllustration";
import { heroTrustBullets } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="inicio" className="section-padding relative overflow-hidden !pt-28 lg:!pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-xs font-medium text-secondary dark:border-accent/20 dark:bg-accent/10 dark:text-accent sm:text-sm">
              Consultor en BI · Automatización · Desarrollo Web | 19+ años
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
              Convierto{" "}
              <span className="gradient-text">datos y procesos</span> en
              decisiones rentables y sistemas que hacen crecer tu negocio
            </h1>

            <p className="mt-6 max-w-xl text-lg text-text-secondary dark:text-text-dark-secondary">
              Soy <strong className="text-primary dark:text-white">Francisco Paula González</strong>,
              especialista en Inteligencia de Negocios, Analítica de Datos y
              Soluciones Tecnológicas. Ayudo a empresas, instituciones
              financieras y profesionales de la salud a automatizar
              operaciones, visualizar KPIs estratégicos y captar más clientes.
            </p>

            <ul className="mt-6 space-y-2">
              {heroTrustBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-secondary dark:text-text-dark-secondary sm:text-base"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary dark:text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#contacto">
                <Button size="lg">
                  <Calendar className="h-4 w-4" />
                  Agendar consulta gratuita
                </Button>
              </Link>
              <Link href="#casos">
                <Button variant="outline" size="lg">
                  Ver casos de éxito
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-sm text-text-secondary dark:text-text-dark-secondary">
              Respuesta en menos de 24 horas · Consulta inicial sin compromiso
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <TechIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
