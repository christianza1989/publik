// src/components/homepage/SynergyIcon.tsx
"use client";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

export const SynergyIcon = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Pulsuojantis fonas */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute h-16 w-16 rounded-full bg-indigo-500/30 dark:bg-indigo-400/30"
      />
      {/* Pati ikona */}
      <div className="relative rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 shadow-lg">
        <Share2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      </div>
    </div>
  );
};
