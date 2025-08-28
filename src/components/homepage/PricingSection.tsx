// src/components/homepage/PricingSection.tsx
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { HeroParticles } from "./effects/HeroParticles";

const plans = [
  {
    name: "Nemokamas",
    price: "0 €",
    description: "Išbandykite platformos pagrindines funkcijas visiškai nemokamai.",
    features: [
      "1 nemokamas AI straipsnis",
      "5 nemokamos publikacijos",
      "Prieiga prie standartinių portalų",
      "Palaikymas el. paštu",
    ],
    popular: false,
  },
  {
    name: "Verslui",
    price: "Nuo 50 €",
    description: "Populiariausias pasirinkimas verslo augimui ir matomumui.",
    features: [
      "Visos nemokamo plano galimybės ir:",
      "Prieiga prie premium portalų",
      "„Public Releases“ funkcija",
      "Prioritetinis palaikymas",
      "Mėnesio ataskaitos",
    ],
    popular: true,
  },
  {
    name: "Agentūra",
    price: "Susisiekite",
    description: "Individualūs sprendimai didelėms apimtims ir agentūroms.",
    features: [
      "Viskas, kas yra Verslui plane",
      "Baltos etiketės (white-label) sprendimai",
      "API prieiga",
      "Asmeninis vadybininkas",
      "Individualūs apmokymai",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  return (
<AnimatedSection id="pricing" className="py-20 sm:py-28 animated-gradient-bg relative overflow-hidden">
      <HeroParticles id="pricing-particles" />
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Kainodara, kuri prisitaiko prie jūsų
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Mokėkite tik už tai, ką naudojate. Jokių mėnesinių įsipareigojimų ar paslėptų mokesčių.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${plan.popular ? 'border-2 border-indigo-600 dark:border-indigo-500 shadow-2xl' : 'dark:bg-slate-800/50'}`}
              >
                {plan.popular && (
                  <div className="bg-indigo-600 text-white text-sm font-semibold text-center py-1.5 rounded-t-lg">
                    Populiariausias
                  </div>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                    {plan.price.includes("€") && plan.price !== "0 €" && <span className="text-muted-foreground"> / publikacija</span>}
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
<Button asChild size="lg" className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 animate-button-pulse' : ''}`}>
                    <Link href="https://portal.publikuota.lt/lt/signup">
                      {plan.name === "Agentūra" ? "Susisiekti" : plan.name === "Nemokamas" ? "Registruotis nemokamai" : "Pradėti dabar"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
