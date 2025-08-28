// src/components/homepage/PublicReleasesSection.tsx
import { AnimatedSection } from "./AnimatedSection";
import { ShoppingBag, BookOpen } from "lucide-react";

export const PublicReleasesSection = () => {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Atraskite Turinio „Vitriną“
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Unikali funkcija, sujungianti turinio kūrėjus ir leidėjus kaip niekad anksčiau.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-md">
                    <ShoppingBag className="h-6 w-6 text-blue-600 dark:text-blue-400"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Pirkėjams: Išplėskite Savo Pasiekiamumą
                </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
                Sukurkite aukštos kokybės straipsnį ir pasiūlykite jį visai leidėjų bendruomenei. Leiskite jiems patiems pasirinkti jūsų turinį ir pasiekite dar platesnę, motyvuotą auditoriją be papildomų pastangų.
            </p>
          </div>
          <div className="text-center md:text-left">
             <div className="inline-flex items-center gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-md">
                    <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Leidėjams: Užpildykite Savo Portalą
                </h3>
             </div>
            <p className="mt-4 text-muted-foreground">
                Trūksta kokybiško turinio jūsų portalui? Naršykite laisvai prieinamų straipsnių sąrašą ir publikuokite juos nemokamai arba už simbolinę premiją. Tai puikus būdas praturtinti savo turinį ir sudominti skaitytojus.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
