// src/components/homepage/AnimatedSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export const AnimatedSection = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
