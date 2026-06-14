"use client";

import { getWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-lg backdrop-blur-md dark:border-gray-800 dark:bg-primary/95 md:hidden"
    >
      <a
        href={getWhatsAppUrl("Hola, soy médico y me interesa una cotización para mi consultorio")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white shadow-lg"
      >
        <MessageCircle className="h-5 w-5" />
        Cotizar por WhatsApp
      </a>
    </motion.div>
  );
}
