import React from "react";
import {Footer, Header} from "../components"
import { ChallengesSection, CTASection, HeroSection, HowItWorks, ProductShowcase, SupportedCRM, TestimonialsSection } from "../sections";

export const LandingPage = () => {
    return (
        <>
        <Header />
        <HeroSection />
        <ChallengesSection />
        <HowItWorks />
        <TestimonialsSection />
        <ProductShowcase />
        <SupportedCRM />
        <CTASection />
        <Footer />
        {/* <FeatureRibbon /> */}
      </>
    );
  };