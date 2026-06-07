"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const serviceIconGradients: Record<string, string> = {
  automatizacion: "bg-gradient-to-br from-violet-500 to-purple-600",
  web: "bg-gradient-to-br from-secondary to-accent",
  sistemas: "bg-gradient-to-br from-emerald-500 to-teal-600",
  datos: "bg-gradient-to-br from-amber-500 to-orange-600",
};

export function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Servicios"
          subtitle="Soluciones tecnológicas integrales para impulsar tu negocio"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} delay={index * 0.1} className="group">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white shadow-lg",
                      serviceIconGradients[service.id]
                    )}
                  >
                    <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-dark-secondary"
                    >
                      <Check className="h-4 w-4 shrink-0 text-secondary dark:text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
