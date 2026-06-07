"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import {
  BarChart3,
  Bot,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const floatingItems = [
  { icon: BarChart3, label: "BI", x: "10%", y: "15%", delay: 0 },
  { icon: LayoutDashboard, label: "Dashboards", x: "75%", y: "10%", delay: 0.2 },
  { icon: Code2, label: "Dev", x: "85%", y: "45%", delay: 0.4 },
  { icon: Bot, label: "Auto", x: "5%", y: "55%", delay: 0.6 },
  { icon: Database, label: "Data", x: "70%", y: "75%", delay: 0.8 },
  { icon: Globe, label: "Web", x: "35%", y: "80%", delay: 1 },
];

export function TechIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 via-accent/10 to-transparent blur-3xl" />

      {/* Central hub */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-secondary/30" />
        <div className="absolute inset-4 rounded-full border border-accent/20" />
        <div className="absolute inset-8 rounded-full border border-secondary/10" />
      </motion.div>

      {/* Center core */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-2xl shadow-secondary/30"
      >
        <Sparkles className="h-12 w-12 text-white" />
      </motion.div>

      {/* Floating tech cards */}
      {floatingItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + item.delay, duration: 0.5 }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:bg-primary/90"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent">
                <Icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-semibold text-primary dark:text-white">
                {item.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <motion.line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="25%"
          stroke="url(#gradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="20%"
          stroke="url(#gradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Stats badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -right-4 top-1/4 rounded-xl border border-emerald-200 bg-white px-4 py-3 shadow-xl dark:border-emerald-800 dark:bg-primary"
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-emerald-500" />
          <div>
            <p className="text-xs text-text-secondary dark:text-text-dark-secondary">
              Eficiencia
            </p>
            <p className="text-lg font-bold text-emerald-500">+80%</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProfileAvatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full min-h-[inherit] overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-1.5 shadow-xl shadow-secondary/20",
        className
      )}
    >
      <div className="relative flex h-full min-h-[inherit] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-gray-300/80 bg-gradient-to-br from-gray-50 to-gray-100 dark:border-gray-600/60 dark:from-primary/80 dark:to-primary-light">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <User
          className="relative h-20 w-20 text-gray-300 dark:text-gray-600 sm:h-24 sm:w-24"
          strokeWidth={1.15}
        />
        <p className="relative mt-4 text-sm font-medium text-gray-400 dark:text-gray-500">
          Foto profesional
        </p>
        <p className="relative mt-1 text-xs text-gray-400/80 dark:text-gray-500/80">
          Cuerpo completo
        </p>
      </div>
    </div>
  );
}
