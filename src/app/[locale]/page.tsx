// src/app/[locale]/page.tsx
import { HeroSection } from "src/components/homepage/HeroSection";
import { InteractiveToolSection } from "src/components/homepage/InteractiveToolSection";
import { AudienceSection } from "src/components/homepage/AudienceSection";
import { InteractiveProcessSection } from "src/components/homepage/InteractiveProcessSection";
import { StatsSection } from "src/components/homepage/StatsSection";
import { ServicesSection } from "src/components/homepage/ServicesSection";
import { FeaturesSection } from "src/components/homepage/FeaturesSection";
import { SocialProofSection } from "src/components/homepage/SocialProofSection";
import { PartnersSection } from "src/components/homepage/PartnersSection";
import { PricingSection } from "src/components/homepage/PricingSection";
import { FaqSection } from "src/components/homepage/FaqSection";
import { FinalCtaSection } from "src/components/homepage/FinalCtaSection";
import { Footer } from "src/components/homepage/Footer";
import { GradientDivider } from "src/components/homepage/GradientDivider";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <HeroSection />
      
      <InteractiveToolSection />
      
{/* <GradientDivider /> */}
{/* <AudienceSection /> */}
      
      <InteractiveProcessSection />
      
{/* <StatsSection /> */}

<ServicesSection />

<GradientDivider />
      <FeaturesSection />
      
      <FinalCtaSection />


{/* <SocialProofSection />
  
<GradientDivider />
<PartnersSection /> */}

      <PricingSection />
      
      <GradientDivider />
      <FaqSection />
      
      <Footer />
    </main>
  );
}
