// src/components/homepage/FinalCtaSection.tsx
"use client";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "src/components/ui/button";
import Link from "next/link";
import { Gift } from 'lucide-react';
import Image from 'next/image';

export const FinalCtaSection = () => {
  return (
    <AnimatedSection className="bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-20 sm:py-28">
        {/* Pagrindinis konteineris su paveikslėliu fone */}
        <div className="relative isolate overflow-hidden rounded-3xl shadow-2xl">
          {/* Foninis paveikslėlis */}
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2073&auto=format&fit=crop"
            alt="Komanda dirba moderniame biure"
            fill
            priority
            className="absolute inset-0 h-full w-full object-cover -z-10"
          />
          {/* Tamsus permatomas sluoksnis */}
          <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
          
          {/* Gradiento perdanga viršuje */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-slate-900/50 to-purple-900/50" />

          <div className="relative z-10 max-w-4xl mx-auto text-center py-16 px-6 sm:py-24 lg:py-32">
            <div className="flex justify-center mb-4">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                    <Gift className="h-8 w-8 text-red-500 animate-bounce-icon" />
                </div>
            </div>
<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
  Kviečiame išbandyti
</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Užsiregistruokite visiškai nemokamai ir išbandykite platformos galią patys. Sugeneruokite pirmąjį savo straipsnį ir mes padovanosime jo publikavimą net <strong className="font-bold text-white">penkiuose</strong> mūsų partnerių portaluose!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-6 text-base transform transition-transform duration-200 hover:scale-105">
                <Link href="https://portal.publikuota.lt/lt/signup">Gauti 5 nemokamas publikacijas</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
