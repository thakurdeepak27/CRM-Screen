import React from "react";
import "./HowItWorks.css";
import { StepCard } from "./StepCard";

import HowItWork1 from "../../assets/images/how-work-1.png";
import HowItWork2 from "../../assets/images/how-work-2.png";
import HowItWork3 from "../../assets/images/how-work-3.png";
import HowItWork4 from "../../assets/images/how-work-4.png";
import HowItWorkLight from "../../assets/images/how-work-light.png";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Install the Extension",
      description:
        "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      image: HowItWork1,
    },
    {
      number: "2",
      title: "Browse LinkedIn",
      description:
        "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      image: HowItWork2,
    },
    {
      number: "3",
      title: "Get Enriched Data",
      description:
        "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      image: HowItWork3,
    },
    {
      number: "4",
      title: "Sync to CRM Instantly",
      description:
        "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights.",
      image: HowItWork4,
    },
  ];

  return (
    <section className="how-container">
      <div className="how-main">
        <div className="without-decoration">
          <div className="container">
            <div className="how-inner">
              <div className="how-header">
                <h2>How it Works</h2>
                <p>From setup to success in 4 simple steps</p>
              </div>

              <div className="how-steps">
                {steps.map((step, index) => (
                  <StepCard key={index} {...step} className="how-step-card" />
                ))}
              </div>

              <div className="how-cta">
                <button className="how-btn">
                  Try LeadCRM Now
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
            <div className="how-decoration">
              <img src={HowItWorkLight} alt="light images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
