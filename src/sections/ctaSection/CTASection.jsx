import { ArrowRight } from "lucide-react";
import huntbannerImage from "../../assets/images/hunt-banner-image.png";
import "./CTASection.css";

export const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-main">
        <div className="header-text">
          Join Thousands of Professionals Using LeadCRM
        </div>
        <div className="container cta-inner">
          <img
            src={huntbannerImage}
            alt="hunt-banner"
            className="hunt-banner"
          />
        </div>
      </div>
      <button className="primary-btn">
        Get Started Today
        <ArrowRight size={24} />
      </button>
    </section>
  );
};
