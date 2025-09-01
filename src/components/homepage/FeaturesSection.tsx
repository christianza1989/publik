// src/components/homepage/FeaturesSection.tsx
"use client";

import { Card, CardContent } from "src/components/ui/card";
import { CheckCircle, XCircle, MoveDown } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const comparisonData = [
  { feature: "Proceso trukmė", traditional: "Dienos / savaitės", publikuota: "AI sukuria per kelias minutes" },
  { feature: "Publikavimo procesas", traditional: "Lėtas ir rankiniu būdu", publikuota: "Automatizuotas" },
  { feature: "Portalų paieška", traditional: "Rankinis darbas, derybos", publikuota: "AI atlieka automatiškai" },
  { feature: "Turinio kūrimas", traditional: "Samdymas, ilgos paieškos", publikuota: "Greitas, patogus (AI arba rašytojas)" },
  { feature: "SEO optimizavimas", traditional: "Brangu, ilga", publikuota: "Įskaičiuota / optimizuota automatiškai" },
  { feature: "Atsiskaitymai", traditional: "Daug sąskaitų", publikuota: "Viena platforma" },
];

export const FeaturesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });
  
  // Sekame, kada vartotojas pasiekia pabaigą, kad paslėptume slinkimo indikatorių
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Naudojame useMotionValueEvent, kad atnaujintume aktyvų indeksą
  // Tai efektyviau nei transformuoti reikšmę kiekviename kadre
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalItems = comparisonData.length;
    const newIndex = Math.min(totalItems - 1, Math.floor(latest * totalItems));
    setActiveIndex(newIndex);
    
    // Tikriname, ar pasiekėme pabaigą
    setIsAtEnd(latest > 0.98);
  });
  
  // Transformuojame slinkimo progresą į kortelės apsisukimo kampą
  const rotate = useTransform(
    scrollYProgress,
    // Kiekvienam elementui sukuriame slinkimo taškus
    comparisonData.flatMap((_, i) => [
      i / comparisonData.length, // Pradžia (0 laipsnių)
      (i + 0.5) / comparisonData.length, // Vidurys (180 laipsnių)
      (i + 1) / comparisonData.length // Pabaiga (180 laipsnių)
    ]),
    // Atitinkami apsisukimo kampai
    comparisonData.flatMap(() => [0, 180, 180])
  );

  const activeItem = comparisonData[activeIndex];

  return (
    <AnimatedSection id="features" className="py-20 sm:py-28 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Senas būdas vs. Publikuota.lt
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Akivaizdūs pranašumai, kurie leis jums pamiršti rankinį darbą amžiams.
          </p>
        </div>

        {/* --- STALINIO KOMPIUTERIO VERSIJA (LENTELĖ) --- */}
        <div className="hidden lg:block w-full max-w-4xl mx-auto">
          <Card className="dark:bg-slate-800/50 dark:backdrop-blur-sm shadow-xl">
            <CardContent className="p-0">
              <table className="min-w-full text-sm text-left">
                {/* ... stalinės versijos lentelės kodas lieka nepakitęs ... */}
                 <thead className="bg-gray-100/50 dark:bg-white/5">
                    <tr>
                      <th scope="col" className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Savybė</th>
                      <th scope="col" className="py-4 px-6 font-semibold text-gray-500 dark:text-gray-400">Tradicinis Būdas</th>
                      <th scope="col" className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Su Publikuota.lt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                    {comparisonData.map((item) => (
                      <tr key={item.feature}>
                        <td className="whitespace-nowrap py-5 px-6 font-medium text-gray-900 dark:text-white">
                          {item.feature}
                        </td>
                        <td className="whitespace-nowrap py-5 px-6">
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                            <span>{item.traditional}</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap py-5 px-6 bg-green-500/5">
                          <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-white">
                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 animate-icon-pulse" />
                            <span>{item.publikuota}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* --- MOBILIOJI VERSIJA (INTERAKTYVUS SLINKIMAS) --- */}
        <div ref={scrollContainerRef} className="lg:hidden relative" style={{ height: `${comparisonData.length * 150}vh` }}>
          <div className="sticky top-28 h-screen w-full flex items-center justify-center">
            <motion.div style={{ rotateX: rotate, perspective: 1000 }} className="w-full max-w-md">
              {/* KORTELĖS NUGARA (Publikuota.lt) */}
              <div style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }} className="absolute inset-0">
                <Card className="dark:bg-slate-800 h-full">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                    <h3 className="font-semibold text-xl text-center text-gray-900 dark:text-white mb-4">{activeItem.feature}</h3>
                    <div className="w-full p-4 rounded-md bg-green-500/5 border border-green-500/10">
                      <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">Su Publikuota.lt</p>
                      <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-white text-lg">
                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                        <span>{activeItem.publikuota}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* KORTELĖS PRIEKIS (Senas būdas) */}
              <div style={{ backfaceVisibility: "hidden" }} className="absolute inset-0">
                <Card className="dark:bg-slate-800 h-full">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                    <h3 className="font-semibold text-xl text-center text-gray-900 dark:text-white mb-4">{activeItem.feature}</h3>
                    <div className="w-full p-4 rounded-md bg-red-500/5 border border-red-500/10">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tradicinis Būdas</p>
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-lg">
                        <XCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
                        <span>{activeItem.traditional}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
          
          {/* Vartotojo подсказка (hint) */}
          <motion.div 
            className="sticky bottom-10 w-full flex justify-center"
            animate={{ opacity: isAtEnd ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground bg-background/50 backdrop-blur-sm p-2 rounded-full">
              <MoveDown className="h-4 w-4" />
              <span className="text-xs font-medium">Slinkite žemyn</span>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};
