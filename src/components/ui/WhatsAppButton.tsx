"use client";

import { cn, getWhatsAppUrl } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "green" | "outline";
  label?: string;
  fullWidth?: boolean;
}

export function WhatsAppButton({
  message = "Hola, me interesa agendar una consulta",
  className,
  size = "md",
  variant = "green",
  label = "Escríbeme por WhatsApp",
  fullWidth = false,
}: WhatsAppButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    green:
      "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20BD5A]",
    outline:
      "border-2 border-[#25D366] bg-transparent text-[#128C7E] hover:bg-[#25D366]/10 dark:text-[#25D366]",
  };

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 active:scale-[0.98]",
        sizes[size],
        variants[variant],
        fullWidth && "w-full sm:w-auto",
        className
      )}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      {label}
    </a>
  );
}

interface SectionWhatsAppProps {
  message?: string;
  label?: string;
  variant?: "green" | "outline";
  className?: string;
}

export function SectionWhatsApp({
  message,
  label = "Escríbeme por WhatsApp",
  variant = "green",
  className,
}: SectionWhatsAppProps) {
  return (
    <div className={cn("mt-10 flex justify-center px-0", className)}>
      <WhatsAppButton message={message} label={label} size="lg" variant={variant} />
    </div>
  );
}
