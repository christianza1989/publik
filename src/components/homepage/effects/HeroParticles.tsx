// src/components/homepage/effects/HeroParticles.tsx
"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { particlesConfig } from "./particlesConfig";

// <<< PAKEITIMAS: Pridėtas id prop tipas >>>
interface HeroParticlesProps {
  id: string;
}

export const HeroParticles = ({ id }: HeroParticlesProps) => { // <<< PAKEITIMAS: Priimamas id prop >>>
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Particles
        id={id} // <<< PAKEITIMAS: Naudojamas perduotas id >>>
        init={particlesInit}
        options={particlesConfig}
        className="h-full w-full"
      />
    </div>
  );
};
