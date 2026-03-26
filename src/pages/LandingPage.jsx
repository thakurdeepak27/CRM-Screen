import React, { useRef } from "react";
import { FloatingCTA, Footer, Header } from "../components";
import {
  ChallengesSection,
  CTASection,
  HeroSection,
  HowItWorks,
  ProductShowcase,
  SupportedCRM,
  TestimonialsSection,
} from "../sections";

import { useVisibility } from "../hooks/useVisibility";

export const LandingPage = () => {
  const heroRef = useRef(null);

  const isHeroVisible = useVisibility(heroRef);

  return (
    <>
      <Header />

      <div ref={heroRef}>
        <HeroSection />
      </div>

      <ChallengesSection />
      <HowItWorks />
      <TestimonialsSection />
      <ProductShowcase />
      <SupportedCRM />
      <CTASection />
      <Footer />
      {!isHeroVisible && <FloatingCTA />}
    </>
  );
};
