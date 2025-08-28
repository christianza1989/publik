// src/components/homepage/SocialProofSection.tsx
"use client";
import { Card, CardContent } from "src/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";
import Image from "next/image";
import { Star, Quote, User, UserRound } from "lucide-react";

// <<< Importuojame reikiamus karuselės komponentus >>>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel";

const testimonials = [
  {
    quote: "„Publikuota.lt“ visiškai pakeitė mūsų turinio rinkodaros strategiją. Sutaupėme dešimtis valandų, o rezultatai viršijo lūkesčius. DI asistentas yra tiesiog neįtikėtinas!",
    name: "Jonas Petrauskas",
    title: "Rinkodaros vadovas, UAB „Tech Inovacijos“",
    rating: 5,
    gender: "male",
  },
  {
    quote: "Kaip portalo savininkas, nuolat ieškau kokybiško turinio. Ši platforma man leido ne tik lengvai užpildyti turinio spragas, bet ir uždirbti papildomai. Rekomenduoju!",
    name: "Ona Jonaitiene",
    title: "Tinklaraščio „Sveika Gyvensena“ autorė",
    rating: 5,
    gender: "female",
  },
  {
    quote: "Anksčiau atgalinių nuorodų gavimas buvo tikras galvos skausmas. Dabar tai vos kelių mygtukų paspaudimo procesas. Mūsų domeno autoritetas auga kaip ant mielių.",
    name: "Andrius Kazlauskas",
    title: "SEO specialistas, „Marketingo Galia“",
    rating: 5,
    gender: "male",
  },
  {
    quote: "Neįsivaizduoju, kaip galėčiau grįžti prie senojo darbo būdo. Platforma sutaupo ne tik laiką, bet ir pinigus. Klientų aptarnavimas taip pat puikus!",
    name: "Laura Vaitkute",
    title: "Smulkaus verslo savininkė",
    rating: 5,
    gender: "female",
  },
  {
    quote: "Platformos analitika padėjo mums suprasti, koks turinys veikia geriausiai. Tai ne tik publikavimo, bet ir strategijos įrankis.",
    name: "Tomas Vėlius",
    title: "Duomenų Analitikas",
    rating: 5,
    gender: "male",
  },
];

const StarRating = ({ rating, className }: { rating: number, className?: string }) => (
  <div className={`flex items-center gap-0.5 ${className}`}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      />
    ))}
  </div>
);

export const SocialProofSection = () => {
  return (
    <AnimatedSection id="testimonials" className="py-20 sm:py-28 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Kuo Pasitiki Rinka
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Išgirskite, ką apie mus sako mūsų klientai ir partneriai.
          </p>
        </div>
        
        {/* <<< Nauja karuselės struktūra >>> */}
        <Carousel
          opts={{
            align: "start",
            loop: true, // Įjungiame ciklinį slinkimą
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              // <<< Nurodome responsyvų kortelių dydį >>>
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="relative dark:bg-slate-800 shadow-xl overflow-hidden flex flex-col h-full">
                    <Quote className="absolute -top-4 -left-4 h-32 w-32 text-gray-100 dark:text-slate-700/50 opacity-50" />
                    <CardContent className="relative p-8 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <StarRating rating={testimonial.rating} className="mb-4" />
                        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-6 flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-slate-700">
                        <div className="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                          {testimonial.gender === 'male' ? (
                            <div className="h-full w-full rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/50">
                              <User className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                            </div>
                          ) : (
                            <div className="h-full w-full rounded-full flex items-center justify-center bg-pink-100 dark:bg-pink-900/50">
                              <UserRound className="h-7 w-7 text-pink-600 dark:text-pink-400" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>

      </div>
    </AnimatedSection>
  );
};
