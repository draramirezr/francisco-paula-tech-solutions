"use client";

import { trustSectors, trustTechnologies } from "@/data/content";
import { motion } from "framer-motion";

export function TrustBar() {
  return (
    <section className="border-y border-gray-200/60 bg-white py-6 dark:border-gray-800 dark:bg-primary/40">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-text-dark-secondary">
              Sectores:
            </span>
            {trustSectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-primary dark:border-gray-700 dark:bg-primary/60 dark:text-white"
              >
                {sector}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-end"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-text-dark-secondary">
              Stack:
            </span>
            {trustTechnologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary dark:bg-accent/10 dark:text-accent"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
