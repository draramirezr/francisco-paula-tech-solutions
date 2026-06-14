"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-primary/30">
      <div className="container-custom">
        <SectionHeading
          title="Lo que dicen quienes confiaron en mis servicios"
          subtitle="Testimonios de clientes y profesionales que han trabajado conmigo"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} delay={index * 0.1} className="relative">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-secondary/10 dark:text-accent/10" />

              <p className="leading-relaxed text-text-secondary dark:text-text-dark-secondary">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-4 border-t border-gray-200/60 pt-6 dark:border-gray-700/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-sm font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-primary dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
