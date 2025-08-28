// src/components/homepage/effects/ScrollIndicator.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <motion.a
      href="#demo"
      aria-label="Slinkti žemyn"
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronDown className="h-8 w-8 text-white/50" />
    </motion.a>
  );
};
