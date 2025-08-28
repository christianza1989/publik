// src/components/homepage/HeroSection.tsx
"use client";
import { HeroParticles } from "./effects/HeroParticles";
import { motion } from "framer-motion";
import { FloatingCode } from "./effects/FloatingCode";
import { ScrollIndicator } from "./effects/ScrollIndicator";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden animated-gradient-bg text-white dark">
      <HeroParticles id="hero-particles" />
      <FloatingCode />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
        className="relative z-10 text-center px-4"
      >
        {/* <<< ATNAUJINTA ANTRAŠTĖ >>> */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-sans max-w-4xl"
        >
          Naujos kartos naujienų ir rinkodaros platforma
        </motion.h1>

        {/* <<< ATNAUJINTA POANTRAŠTĖ >>> */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
        >
          Automatizuok straipsnių publikavimą. Išsirink portalus, publikuok, gauk rezultatą ir taupyk laiką.
        </motion.p>
        
        {/* Mygtukai ir partneriai buvo čia ir dabar yra pašalinti */}

      </motion.div>

      <ScrollIndicator />
    </section>
  );
};
