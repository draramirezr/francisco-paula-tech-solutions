"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code,
  HeadphonesIcon,
  Lightbulb,
  Rocket,
  Search,
} from "lucide-react";

const stepIcons = [Search, Lightbulb, Code, CheckCircle2, Rocket, HeadphonesIcon];

export function Process() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Proceso de Trabajo"
          subtitle="Un enfoque estructurado para garantizar resultados excepcionales"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-16 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div
                      className={`inline-block rounded-2xl border border-gray-200/60 bg-white p-6 shadow-lg dark:border-gray-700/60 dark:bg-primary/60 ${
                        isEven ? "md:ml-auto" : ""
                      } max-w-md`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-accent">
                        Paso {step.step}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-primary dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon node */}
                  <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30 md:relative md:left-auto md:shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
