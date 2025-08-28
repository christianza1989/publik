"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";

// Kodo fragmentai, kurie bus rodomi
const codeSnippets = [
  { code: "<h1>", size: "text-2xl", x: "10%", y: "20%" },
  { code: "</>", size: "text-4xl", x: "80%", y: "30%" },
  { code: "{...}", size: "text-xl", x: "15%", y: "75%" },
  { code: "/>", size: "text-3xl", x: "90%", y: "85%" },
  { code: "<div>", size: "text-lg", x: "60%", y: "10%" },
  { code: "</div>", size: "text-5xl", x: "30%", y: "50%" },
  { code: "<span>", size: "text-md", x: "70%", y: "65%" },
];

// Atskiras komponentas vienam fragmentui, kad logika būtų švaresnė
const Snippet = ({ code, size, x, y }: { code: string; size: string; x: string; y: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Paralakso faktorius - mažesni elementai juda mažiau, sukurdami gilumą
  const parallaxFactor = (parseInt(size.split('-')[1], 10) || 1) * 0.1;

  // Naudojame motion values iš tėvinio komponento (bus perduoti per context arba props, bet čia supaprastiname)
  // Šiuo atveju tiesiog animuosime juos vietoje
  
  return (
    <motion.div
      ref={ref}
      className={`absolute font-mono text-slate-700 dark:text-slate-500 select-none ${size}`}
      style={{ top: y, left: x, zIndex: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isInView ? 0.3 : 0, 
        scale: isInView ? 1 : 0.5,
        y: [0, -15, 0, 15, 0], // Švelnus "plaukiojimo" efektas
      }}
      transition={{ 
        opacity: { duration: 1, delay: Math.random() * 2 },
        scale: { duration: 1, delay: Math.random() * 2 },
        y: { duration: 10 + Math.random() * 10, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {code}
    </motion.div>
  );
};

export const FloatingCode = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pelės pozicijos sekimas visame konteineryje
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left - rect.width / 2);
      mouseY.set(event.clientY - rect.top - rect.height / 2);
    }
  };
  
  // Transformuojame pelės poziciją į judėjimą
  // Didesnis skaičius (pvz., 0.03) reiškia didesnį judėjimą
  const parallaxX = useTransform(mouseX, (value) => value * 0.03);
  const parallaxY = useTransform(mouseY, (value) => value * 0.03);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ x: parallaxX, y: parallaxY, transition: 'transform 0.2s ease-out' }}
    >
      {codeSnippets.map((snippet) => (
        <Snippet key={snippet.code} {...snippet} />
      ))}
    </motion.div>
  );
};
