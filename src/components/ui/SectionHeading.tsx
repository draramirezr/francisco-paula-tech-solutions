"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-10 lg:mb-14",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-balance text-2xl font-bold tracking-tight text-primary dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title.includes("?") ? (
          <>
            {title.split("?")[0]}
            <span className="gradient-text">?</span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary dark:text-text-dark-secondary sm:mt-4 sm:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-secondary to-accent",
          centered && "mx-auto"
        )}
      />
    </motion.div>
  );
}
