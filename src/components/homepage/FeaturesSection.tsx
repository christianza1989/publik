// src/components/homepage/FeaturesSection.tsx
"use client";
import { useState, useRef, useLayoutEffect } from "react"; // <<< PAKEITIMAS: importuotas useLayoutEffect
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const comparisonData = [
  { feature: "Proceso trukmė", traditional: "Dienos / savaitės", publikuota: "AI sukuria per kelias minutes" },
  { feature: "Publikavimo procesas", traditional: "Lėtas ir rankiniu būdu", publikuota: "Automatizuotas" },
  { feature: "Portalų paieška", traditional: "Rankinis darbas, derybos", publikuota: "AI atlieka automatiškai" },
  { feature: "Turinio kūrimas", traditional: "Samdymas, ilgos paieškos", publikuota: "Greitas, patogus (AI arba rašytojas)" },
  { feature: "SEO optimizavimas", traditional: "Brangu, ilga", publikuota: "Įskaičiuota / optimizuota automatiškai" },
  { feature: "Atsiskaitymai", traditional: "Daug sąskaitų", publikuota: "Viena platforma" },
];

export const FeaturesSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHeight, setCardHeight] = useState<number | 'auto'>('auto');
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);

  // <<< PAKEITIMAS: useEffect pakeistas į useLayoutEffect >>>
  useLayoutEffect(() => {
    const newHeight = isFlipped 
        ? backCardRef.current?.offsetHeight 
        : frontCardRef.current?.offsetHeight;
    
    if (newHeight) {
        setCardHeight(newHeight);
    }
  }, [isFlipped, comparisonData]);

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

        {/* --- MOBILIOJI VERSIJA --- */}
        <div className="md:hidden w-full flex flex-col items-center" style={{ perspective: '1000px' }}>
          
          <motion.div 
              className="w-full max-w-sm min-h-[520px]" // <<< PAKEITIMAS: Pridėta min-h klasė
              animate={{ height: cardHeight || 'auto' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
          >
              <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, { offset, velocity }) => {
                      const swipeThreshold = 50;
                      if (offset.x < -swipeThreshold) {
                          setIsFlipped(true);
                      } else if (offset.x > swipeThreshold) {
                          setIsFlipped(false);
                      }
                  }}
                  className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                  <motion.div
                      className="relative w-full h-full"
                      style={{ transformStyle: 'preserve-3d' }}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                      {/* Priekinė pusė */}
                      <div ref={frontCardRef} className="absolute w-full h-auto" style={{ backfaceVisibility: 'hidden' }}>
                          <Card>
                              <CardHeader>
                                  <CardTitle>Senas būdas</CardTitle>
                              </CardHeader>
                              <CardContent className="px-6 pb-6 pt-0">
                                  {comparisonData.map((item) => (
                                      <div key={item.feature} className="flex items-start space-x-4 py-4 border-b border-gray-200 dark:border-slate-700 last:border-b-0">
                                          <div><XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" /></div>
                                          <div className="flex flex-col">
                                              <span className="font-semibold text-gray-900 dark:text-white">{item.feature}</span>
                                              <span className="text-sm text-muted-foreground">{item.traditional}</span>
                                          </div>
                                      </div>
                                  ))}
                              </CardContent>
                          </Card>
                      </div>

                      {/* Galinė pusė */}
                      <div ref={backCardRef} className="absolute w-full h-auto" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                          <Card>
                              <CardHeader>
                                  <CardTitle>Su Publikuota.lt</CardTitle>
                              </CardHeader>
                              <CardContent className="px-6 pb-6 pt-0">
                                  {comparisonData.map((item) => (
                                      <div key={item.feature} className="flex items-start space-x-4 py-4 border-b border-gray-200 dark:border-slate-700 last:border-b-0">
                                          <div><CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" /></div>
                                          <div className="flex flex-col">
                                              <span className="font-semibold text-gray-900 dark:text-white">{item.feature}</span>
                                              <span className="text-sm text-muted-foreground">{item.publikuota}</span>
                                          </div>
                                      </div>
                                  ))}
                              </CardContent>
                          </Card>
                      </div>
                  </motion.div>
              </motion.div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              animate={{ x: [-10, 10] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
              className="text-sm text-muted-foreground mt-6"
          >
              Slinkite kortelę
          </motion.div>

          <div className="flex items-center justify-center space-x-4 mt-4">
              <button 
                  onClick={() => setIsFlipped(false)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${!isFlipped ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200'}`}
              >
                  Senas būdas
              </button>
              <button 
                  onClick={() => setIsFlipped(true)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${isFlipped ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200'}`}
              >
                  Publikuota.lt
              </button>
          </div>
        </div>

        {/* --- STALINIO KOMPIUTERIO VERSIJA --- */}
        <div className="hidden md:block">
          <Card className="dark:bg-slate-800/50 dark:backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
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
                        <td className="whitespace-nowrap py-5 px-6 font-medium text-gray-900 dark:text-white">{item.feature}</td>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
};
