"use client";

import { SectionWhatsApp } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseItems } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhyChoose() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Un consultor tecnológico senior"
          subtitle="Analista de datos senior con enfoque en salud — y experiencia para empresas que exigen resultados"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, index) => {
            const Icon = item.icon;
            return (
            <Card key={item.title} delay={index * 0.08}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 dark:bg-accent/10">
                <Icon className="h-5 w-5 text-secondary dark:text-accent" />
              </div>
              <h3 className="font-bold text-primary dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                {item.description}
              </p>
            </Card>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="#salud">
            <Button size="lg">
              Ver soluciones para consultorios
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <SectionWhatsApp
            className="mt-0"
            message="Hola, me interesa trabajar contigo"
            label="Escríbeme por WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}
