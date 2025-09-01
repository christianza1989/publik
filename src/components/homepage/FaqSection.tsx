// src/components/homepage/FaqSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "./AnimatedSection";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, DollarSign, Sparkles, HelpCircle, Puzzle, Cpu, GitBranch } from "lucide-react";

// <<< Atnaujintas DUK sąrašas su ikonomis >>>
const faqData = [
  {
    icon: <DollarSign className="h-6 w-6 text-indigo-500" />,
    question: "Kiek tai kainuoja?",
    answer: "Jūs mokate tik už konkrečias paslaugas. Publikacijos kaina priklauso nuo pasirinkto portalo, o už AI asistento paslaugas atsiskaitote kreditais. Nėra jokių mėnesinių mokesčių."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-amber-500" />,
    question: "Ar AI sukurtas turinys yra unikalus?",
    answer: "Taip, mūsų dirbtinio intelekto (AI) modeliai yra apmokyti kurti visiškai unikalų turinį. Kiekvienas straipsnis yra patikrinamas dėl plagiato, siekiant užtikrinti jo originalumą."
  },
  {
    icon: <HelpCircle className="h-6 w-6 text-emerald-500" />,
    question: "Kaip veikia atsiskaitymai?",
    answer: "Visi atsiskaitymai vyksta per mūsų saugią platformą. Galite papildyti savo sąskaitos kreditus, kurie bus naudojami tiek publikacijų užsakymams, tiek DI paslaugoms."
  },
  {
    icon: <Puzzle className="h-6 w-6 text-sky-500" />,
    question: "Ar galiu naudoti platformą, jei mano svetainė sukurta su WordPress?",
    answer: "Žinoma! Mes turime specialiai sukurtą WordPress įskiepį, kuris leidžia leidėjams sklandžiai ir automatiškai priimti ir publikuoti straipsnius tiesiai iš „Publikuota.lt“ platformos."
  },
  {
    icon: <GitBranch className="h-6 w-6 text-orange-500" />,
    question: "Ar galiu naudotis platforma, jeigu mano svetainė ne WordPress?",
    answer: "Šiuo metu mūsų automatinė integracija ir specialus įskiepis yra pritaikytas tik WordPress turinio valdymo sistemai. Tačiau mes aktyviai dirbame ties sprendimais ir kitoms populiarioms platformoms. Kviečiame prenumeruoti mūsų naujienlaiškį, kad pirmieji sužinotumėte apie naujas integracijos galimybes!"
  },
  {
    icon: <Cpu className="h-6 w-6 text-rose-500" />,
    question: "Kuo Publikuota.lt pranašesnė už tradicinę naujienų sklaidą?",
    answer: "Mūsų platforma apjungia geriausius abiejų pasaulių aspektus: greitį, efektyvumą ir prieinamą kainą. Jūs gaunate kokybišką turinį ir publikacijas žymiai greičiau ir pigiau, nei dirbant su tradiciniais tiekėjais."
  }
];

export const FaqSection = () => {
  return (
    <AnimatedSection id="faq" className="relative py-20 sm:py-28 bg-gray-50 dark:bg-slate-900 overflow-hidden">
        {/* <<< Foninis gradientas >>> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-radial-gradient(circle, rgba(167, 139, 250, 0.1), transparent 60%) dark:bg-radial-gradient(circle, rgba(167, 139, 250, 0.05), transparent 70%) pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Dažniausiai Užduodami Klausimai
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Radote atsakymą į savo klausimą? Jei ne, mes visada pasiruošę padėti.
                </p>
            </div>

            {/* <<< Struktūros pakeitimas į dvispalvį (split) išdėstymą >>> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                
                {/* Kairė pusė: Akordeonas */}
                <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index} className="bg-white dark:bg-slate-800/50 border dark:border-slate-700/50 rounded-lg shadow-sm mb-4 px-6">
                                {/* <<< Patobulintas akordeono trigeris su ikona >>> */}
                                <AccordionTrigger className="text-left font-semibold text-gray-800 dark:text-gray-100 hover:no-underline text-base">
                                    <div className="flex items-center gap-4">
                                        {item.icon}
                                        <span>{item.question}</span>
                                    </div>
                                </AccordionTrigger>
                                {/* <<< Patobulintas turinys su šonine linija >>> */}
                                <AccordionContent className="pt-2">
                                    <div className="border-l-2 border-indigo-500 pl-6 text-muted-foreground">
                                        {item.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    
                    {/* <<< Papildomas CTA blokas >>> */}
                    <div className="text-center mt-8">
                        <Button variant="ghost">
                            Nerandate atsakymo? Susisiekite
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Dešinė pusė: Vizualinis elementas */}
                <div className="hidden lg:block lg:sticky top-24">
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop"
                            alt="Support representative"
                            fill
                            className="object-cover"
                        />
                         {/* <<< Efektas nuotraukai >>> */}
                        <div className="absolute inset-0 bg-indigo-500/10 mix-blend-multiply"></div>
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl"></div>
                    </div>
                </div>

            </div>
        </div>
    </AnimatedSection>
  );
};
