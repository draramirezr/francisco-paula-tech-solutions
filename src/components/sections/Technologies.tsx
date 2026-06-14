"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies } from "@/data/content";
import { motion } from "framer-motion";

export function Technologies() {
  return (
    <section id="tecnologias" className="section-padding bg-gray-50/50 dark:bg-primary/30">
      <div className="container-custom">
        <SectionHeading
          title="Tecnologías que domino"
          subtitle="Herramientas enterprise para soluciones robustas y escalables"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-gray-200/60 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-shadow hover:border-secondary/30 hover:shadow-md dark:border-gray-700/60 dark:bg-primary/60 dark:text-white dark:hover:border-accent/30"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
