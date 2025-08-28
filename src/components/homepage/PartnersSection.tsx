// src/components/homepage/PartnersSection.tsx
import { AnimatedSection } from "./AnimatedSection";
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel";

// <<< IŠPLĖSTAS PARTNERIŲ SĄRAŠAS >>>
// Pastaba: Jums reikės sukurti failus placeholder-logo-6.svg ir t.t.
const partners = [
  { name: 'Partner 1', logo: '/logos/placeholder-logo-1.svg' },
  { name: 'Partner 2', logo: '/logos/placeholder-logo-2.svg' },
  { name: 'Partner 3', logo: '/logos/placeholder-logo-3.svg' },
  { name: 'Partner 4', logo: '/logos/placeholder-logo-4.svg' },
  { name: 'Partner 5', logo: '/logos/placeholder-logo-5.svg' },
  { name: 'Partner 6', logo: '/logos/placeholder-logo-6.svg' },
];

export const PartnersSection = () => {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white mb-10">
          Mumis pasitiki inovatyviausios Lietuvos įmonės
        </h2>
        
        {/* <<< NAUJA KARUSELĖS STRUKTŪRA >>> */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="flex items-center justify-center h-24 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                  <Image
                    className="max-h-12 w-full object-contain dark:invert"
                    src={partner.logo}
                    alt={partner.name}
                    width={158}
                    height={48}
                  />
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
