// src/components/homepage/InteractiveProcessSection.tsx
"use client";
import { AnimatedSection } from "./AnimatedSection";
import { motion, Variants } from "framer-motion";
// <<< PAKEITIMAS: Importuojamos naujos, labiau tinkančios ikonos >>>
import { Newspaper, Send, UserCheck } from "lucide-react";

// <<< PAKEITIMAS: Atnaujintas visas `processSteps` masyvas >>>
const processSteps = [
  {
    icon: <Newspaper className="h-8 w-8 text-indigo-400" />,
    title: "Publikuoti naujieną",
    description: "Siūlykite savo naujieną keliems portalams vienu metu. Redaktoriai ją matys savo paskyrose ir galės publikuoti vienu paspaudimu – kaip naujos kartos naujienų agentūroje."
  },
  {
    icon: <Send className="h-8 w-8 text-sky-400" />,
    title: "Užsisakyti straipsnį",
    description: "Paskelbkite straipsnį konkrečiame portale ar portaluose. Pasirinkite žiniasklaidos kanalą, įkelkite tekstą ir publikuokite be tarpininkų – greitai ir skaidriai."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-green-400" />,
    title: "Tapti partneriu",
    description: "Valdykite savo portalą ir uždirbkite iš turinio. Gaukite straipsnių pasiūlymus, nustatykite kainas ir publikuokite turinį pagal savo taisykles."
  }
];

export const InteractiveProcessSection = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <AnimatedSection id="how-it-works" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Foninis paveikslėlis su perdanga */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
          alt="Darbo procesas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 animated-gradient-bg opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* <<< PAKEITIMAS: Atnaujinta sekcijos antraštė >>> */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Kaip tai veikia?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Trys paprasti būdai pasiekti savo tikslus mūsų platformoje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white/5 dark:bg-slate-800/30 p-8 rounded-2xl backdrop-blur-lg border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex-shrink-0 mb-6">
                <div className="inline-block p-4 bg-white/10 rounded-xl">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
