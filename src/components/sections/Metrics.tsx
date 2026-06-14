"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactMetrics } from "@/data/content";
import { motion } from "framer-motion";

export function Metrics() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-primary/30">
      <div className="container-custom">
        <SectionHeading title="Resultados que hablan por sí solos" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-3xl font-bold gradient-text lg:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
