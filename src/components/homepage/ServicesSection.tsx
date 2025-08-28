"use client";

import Image from "next/image";
import { Newspaper, Send, UserCheck, Building, PenSquare } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";
import { AnimatedSection } from "./AnimatedSection";

const servicesData = [
  {
    icon: <Newspaper className="h-8 w-8 text-white" />,
    title: "Publikuoti naujieną",
    subtitle: "Naujos kartos naujienų agentūra su didžiausiu regioninių portalų tinklu.",
    description: "Publikuota.lt – tai moderni naujienų sklaidos platforma, kuri leidžia jūsų pranešimą paskleisti visoje Lietuvoje vos per kelias minutes. Mūsų stiprybė – didžiausias regioninių naujienų portalų tinklas, suteikiantis galimybę pasiekti plačią, įvairią ir geografiškai išskaidytą auditoriją.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    whyPoints: [
      "Didžiausias regioninės žiniasklaidos portalų tinklas Lietuvoje.",
      "Momentinis naujienos paskleidimas – jūsų žinutė auditoriją pasiekia tą pačią dieną.",
      "Vienu paspaudimu publikuojamas turinys redakcijose.",
      "Patogu, greita ir skaidru – jūs valdote visą procesą nuo įkėlimo iki publikacijos.",
    ],
    howPoints: [
      "Įkelkite naujieną ar pranešimą spaudai.",
      "Ji tampa matoma regioniniams portalams.",
      "Redaktoriai ją patalpina vos vienu paspaudimu.",
    ],
  },
  {
    icon: <Send className="h-8 w-8 text-white" />,
    title: "Užsisakyti straipsnį",
    subtitle: "Tiesioginis kelias į jūsų pasirinktą portalą.",
    description: "Su Publikuota.lt galite užsisakyti straipsnį ir iškart jį paskelbti norimame portale – be jokių tarpininkų. Tai paprasčiausias būdas užtikrinti, kad jūsų žinutė būtų matoma būtent ten, kur ją pastebės jūsų tikslinė auditorija.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    whyPoints: [
      "Galimybė tiesiogiai įsigyti publikaciją pasirinktuose portaluose.",
      "Profesionaliai parengtas tekstas pagal jūsų tikslus.",
      "Matomumas būtent toje erdvėje, kur lankosi jūsų auditorija.",
      "Aiškus procesas ir skaidri kaina.",
    ],
    howPoints: [
      "Pasirinkite portalą, kuriame norite publikuoti straipsnį.",
      "Pateikite temą ir pagrindinę informaciją.",
      "Mūsų komanda parengia straipsnį ir suderina jį su redakcija.",
      "Straipsnis publikuojamas pasirinktoje žiniasklaidos priemonėje.",
    ],
  },
  {
    icon: <UserCheck className="h-8 w-8 text-white" />,
    title: "Tapti media partneriu",
    subtitle: "Uždirbkite iš kiekvienos publikacijos.",
    description: "Publikuota.lt jungia verslus, organizacijas ir žiniasklaidą. Tapę mūsų partneriu, įtraukiate savo portalą į didžiausią žiniasklaidos tinklą Lietuvoje ir gaunate tiesioginius užsakymus publikacijoms.",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop",
    whyPoints: [
      "Papildomos pajamos už kiekvieną paskelbtą straipsnį.",
      "Tiesioginis ryšys su užsakovais.",
      "Galimybė užpildyti turinio kalendorių kokybišku turiniu.",
      "Paprastas ir aiškus valdymas vienoje sistemoje.",
    ],
    howPoints: [
      "Užsiregistruokite kaip Publikuota.lt partneris.",
      "Nurodykite savo portalo tematiką, kainas ir publikavimo sąlygas.",
      "Gaukite užsakymus ir patvirtinkite norimą turinį.",
      "Publikuokite straipsnius ir gaukite užmokestį.",
    ],
  },
  {
    icon: <PenSquare className="h-8 w-8 text-white" />,
    title: "Tapti rašytoju",
    subtitle: "Monetizuokite savo rašymo įgūdžius.",
    description: "Esate talentingas rašytojas, turinio kūrėjas ar SEO specialistas? Prisijunkite prie mūsų kūrėjų bendruomenės ir gaukite užsakymus straipsnių rašymui. Rinkitės temas, kurios jums patinka, ir uždirbkite iš savo talento.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop",
    whyPoints: [
      "Gaukite nuolatinius užsakymus iš įvairių klientų.",
      "Lankstus darbo grafikas ir laisvė rinktis temas.",
      "Skaidrus ir greitas atsiskaitymas už atliktą darbą.",
      "Kelkite savo, kaip autoriaus, reputaciją.",
    ],
    howPoints: [
        "Užsiregistruokite kaip rašytojas ir sukurkite savo portfolio.",
        "Gaukite pranešimus apie naujus straipsnių užsakymus.",
        "Pateikite savo paraišką ir, ją patvirtinus, parašykite straipsnį.",
        "Gaukite atlygį iškart po straipsnio patvirtinimo.",
    ],
  },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut" as any
      }
    })
};

export const ServicesSection = () => {
    return (
        <AnimatedSection className="py-20 sm:py-28 bg-gray-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Viena platforma, kuri sujungia
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Atraskite, kaip galime padėti pasiekti jūsų tikslus, nesvarbu, kas esate – verslas, agentūra ar leidėjas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <Image
                                src={service.imageUrl}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                            <div className="relative z-10 p-8 flex flex-col h-full text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{service.title}</h3>
                                        <p className="text-sm text-white/80">{service.subtitle}</p>
                                    </div>
                                </div>
                                <p className="text-white/90 flex-grow mb-6">{service.description}</p>
                                
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1" className="border-white/20">
                                        <AccordionTrigger className="hover:no-underline font-semibold">Kodėl verta?</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc pl-5 space-y-2 text-white/80">
                                                {service.whyPoints.map(point => <li key={point}>{point}</li>)}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2" className="border-b-0 border-white/20">
                                        <AccordionTrigger className="hover:no-underline font-semibold">Kaip tai veikia?</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc pl-5 space-y-2 text-white/80">
                                                {service.howPoints.map(point => <li key={point}>{point}</li>)}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};
