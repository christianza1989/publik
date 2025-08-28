// src/components/homepage/AudienceSection.tsx
"use client"; // Būtina interaktyvumui
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import { Rocket, Gem } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import Link from "next/link";
import { SynergyIcon } from "./SynergyIcon"; // Importuojame naują komponentą
import { motion, Variants } from "framer-motion"; // Importuojame framer-motion ir Variants

export const AudienceSection = () => {
  const [hoveredCard, setHoveredCard] = useState<"business" | "publisher" | null>(null);

  const pathVariants: Variants = { // Explicitly type as Variants
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } }, // Changed ease to cubic-bezier array
  };

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
             Du Pasauliai, Viena Ekosistema
           </h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
             Atraskite, kaip „Publikuota.lt“ sujungia turinio poreikius ir monetizacijos galimybes.
           </p>
        </div>
        
        {/* Pagrindinis konteineris su santykiniu pozicionavimu */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG sluoksnis linijoms, pozicionuotas absoliučiai */}
          <motion.svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 200"
            preserveAspectRatio="none"
            initial="hidden"
          >
            {/* Linija nuo Verslo kortelės */}
            <motion.path
              d="M 200 100 C 300 100, 300 100, 400 100"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              variants={pathVariants}
              animate={hoveredCard === "business" ? "visible" : "hidden"}
            />
            {/* Linija nuo Leidėjų kortelės */}
            <motion.path
              d="M 600 100 C 500 100, 500 100, 400 100"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              variants={pathVariants}
              animate={hoveredCard === "publisher" ? "visible" : "hidden"}
            />
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#a5b4fc" />
                    <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
            </defs>
          </motion.svg>

          {/* Tinklelis kortelėms ir centriniam elementui */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 z-10">
            
            {/* Verslui Kortelė */}
            <div onMouseEnter={() => setHoveredCard("business")} onMouseLeave={() => setHoveredCard(null)}>
              <Card className="text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Rocket className="h-12 w-12 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold dark:text-white">Verslui</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Automatizuokite turinio kūrimą ir publikavimą, gaukite kokybiškas atgalines nuorodas ir auginkite savo SEO be pastangų.
                  </p>
                  <Button asChild className="mt-auto bg-indigo-600 hover:bg-indigo-700">
                    <Link href="https://portal.publikuota.lt/lt/signup">Sprendimai verslui</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Centrinis elementas */}
            <div className="hidden md:block">
              <SynergyIcon />
            </div>

            {/* Leidėjams Kortelė */}
            <div onMouseEnter={() => setHoveredCard("publisher")} onMouseLeave={() => setHoveredCard(null)}>
              <Card className="text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Gem className="h-12 w-12 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold dark:text-white">Leidėjams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Monetizuokite savo portalo turinį, lengvai priimkite ir publikuokite kokybiškus straipsnius, generuodami papildomas pajamas.
                  </p>
                  <Button asChild className="mt-auto bg-green-600 hover:bg-green-700">
                    <Link href="https://portal.publikuota.lt/lt/signup">Galimybės leidėjams</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
