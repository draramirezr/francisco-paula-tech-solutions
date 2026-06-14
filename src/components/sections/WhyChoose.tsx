"use client";

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
          subtitle="Por qué empresas y profesionales eligen trabajar conmigo"
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

        <div className="mt-10 text-center">
          <Link href="#contacto">
            <Button size="lg">
              Solicitar propuesta personalizada
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
