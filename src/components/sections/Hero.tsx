"use client";

import { Button } from "@/components/ui/Button";
import { TechIllustration } from "@/components/ui/TechIllustration";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="inicio" className="section-padding relative overflow-hidden !pt-28 lg:!pt-32">
      {/* Background */}
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
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
              Transformo{" "}
              <span className="gradient-text">Ideas y Datos</span> en
              Soluciones Tecnológicas
            </h1>

            <p className="mt-6 max-w-xl text-lg text-text-secondary dark:text-text-dark-secondary">
              Ayudo a empresas y emprendedores a optimizar procesos, automatizar
              tareas, desarrollar sistemas y tomar mejores decisiones mediante
              tecnología y análisis de datos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#servicios">
                <Button size="lg">
                  Ver Servicios
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contacto">
                <Button variant="outline" size="lg">
                  Solicitar Cotización
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right illustration */}
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
