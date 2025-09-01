// src/components/homepage/FeaturesSection.tsx
"use client";
import { Card, CardContent } from "src/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const comparisonData = [
  { feature: "Proceso trukmė", traditional: "Dienos / savaitės", publikuota: "AI sukuria per kelias minutes" },
  { feature: "Publikavimo procesas", traditional: "Lėtas ir rankiniu būdu", publikuota: "Automatizuotas" },
  { feature: "Portalų paieška", traditional: "Rankinis darbas, derybos", publikuota: "AI atlieka automatiškai" },
  { feature: "Turinio kūrimas", traditional: "Samdymas, ilgos paieškos", publikuota: "Greitas, patogus (AI arba rašytojas)" },
  { feature: "SEO optimizavimas", traditional: "Brangu, ilga", publikuota: "Įskaičiuota / optimizuota automatiškai" },
  { feature: "Atsiskaitymai", traditional: "Daug sąskaitų", publikuota: "Viena platforma" },
];

export const FeaturesSection = () => {
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

        <div className="w-full max-w-4xl mx-auto">
          {/* <<< PAKEITIMAS NR. 1: STALINIO KOMPIUTERIO VERSIJA (LENTELĖ) >>> */}
          {/* Ši versija bus matoma tik 'lg' ir didesniuose ekranuose */}
          <Card className="hidden lg:block dark:bg-slate-800/50 dark:backdrop-blur-sm shadow-xl">
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
              </div>
            </CardContent>
          </Card>

          {/* <<< PAKEITIMAS NR. 2: MOBILIOJI VERSIJA (KORTELĖS) >>> */}
          {/* Ši versija bus matoma mažuose ekranuose ir paslėpta nuo 'lg' dydžio */}
          <div className="block lg:hidden space-y-4">
            {comparisonData.map((item) => (
              <Card key={item.feature} className="dark:bg-slate-800/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">{item.feature}</h3>
                  <div className="space-y-4">
                    {/* Tradicinis būdas */}
                    <div className="p-4 rounded-md bg-red-500/5 border border-red-500/10">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tradicinis Būdas</p>
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <span>{item.traditional}</span>
                      </div>
                    </div>
                    {/* Su Publikuota.lt */}
                    <div className="p-4 rounded-md bg-green-500/5 border border-green-500/10">
                      <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">Su Publikuota.lt</p>
                      <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-white">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span>{item.publikuota}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
