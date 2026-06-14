"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes antes de iniciar tu proyecto"
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-primary dark:text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-secondary transition-transform dark:text-accent",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-gray-200/60 px-5 pb-5 pt-3 dark:border-gray-700/60">
                    <p className="text-sm leading-relaxed text-text-secondary dark:text-text-dark-secondary">
                      {item.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
