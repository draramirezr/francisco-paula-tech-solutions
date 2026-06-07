"use client";

import { siteConfig } from "@/lib/utils";
import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const floatingButtons = [
  {
    href: `https://wa.me/${siteConfig.whatsapp}?text=Hola,%20me%20interesa%20solicitar%20una%20cotización`,
    icon: MessageCircle,
    label: "WhatsApp",
    color: "bg-[#25D366] hover:bg-[#20BD5A]",
  },
  {
    href: siteConfig.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    color: "bg-[#0A66C2] hover:bg-[#0958A8]",
  },
  {
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    label: "Correo",
    color: "bg-secondary hover:bg-secondary-light",
  },
];

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {floatingButtons.map((button, index) => {
        const Icon = button.icon;
        return (
          <motion.a
            key={button.label}
            href={button.href}
            target={button.label === "LinkedIn" ? "_blank" : undefined}
            rel={button.label === "LinkedIn" ? "noopener noreferrer" : undefined}
            aria-label={button.label}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-colors ${button.color}`}
          >
            <Icon className="h-5 w-5" />
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
              {button.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}
