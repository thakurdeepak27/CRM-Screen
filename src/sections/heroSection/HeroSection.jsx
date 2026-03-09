import React from "react";
// import { Button, Header } from "./components";
import chromeImage from "../../assets/images/chrome-logo.png";
import salesforce from "../../assets/images/salesforce.png";
import pipedrive from "../../assets/images/pipedrive.png"
import hubspot from "../../assets/images/hubspot.png"
import victor from "../../assets/images/victor.png";
import chromeHalf from "../../assets/images/crome-half.png";
import cursorPointer from "../../assets/images/cursor-pointer.png";
import WaterFall from "../../assets/images/water-fall.png";
import carban from "../../assets/images/carban.png";
import adobeExpress from "../../assets/images/adobe-express.png";
import "./HeroSection.css";

export const HeroSection = () =>{
    return(
        <main className="page-shell">
        <section className="hero" id="product">
          <div className="hero-content-center">
            {/* Top Badge */}
            <div className="trust-badge">
              <span className="rocket-icon">🚀</span>
              Thousands of Professionals using LeadCRM
            </div>
            <h1 className="hero-main-title">
              LinkedIn CRM Integration <br />
              Capture, Sync and Enrich in{" "}
              <span className="highlight-underline">Both Ways</span>
            </h1>
            {/* Subtitle */}
            <p className="hero-description">
              Automatically sync LinkedIn prospects to your CRM and overlay
              existing CRM contacts on LinkedIn profiles. Complete
              bi-directional integration with HubSpot, Salesforce, and
              Pipedrive.
            </p>

            {/* Integration Bar */}
            <div className="integration-container">
              <div className="integration-card">
                <span className="integration-label">Works with</span>
                <div className="integration-icons">
                  <div className="icon-circle hubspot">
                  <img
        src={hubspot}
        alt="hubspot"
        className="hubspot-icon"
      />
                  </div>
                  <div className="icon-circle pipedrive">
                  <img
        src={pipedrive}
        alt="pipedrive"
        className="pipedrive-icon"
      />
                  </div>
                  <div className="icon-circle salesforce">
                  <img
        src={salesforce}
        alt="salesforce"
        className="salesforce-icon"
      />
                  </div>
                </div>
              </div>
            </div>
            {/* Ratings */}
            <div className="ratings-row">
              <div className="rating-pill">
              <div className="rating-pill-img"> 
                <img src={chromeHalf} alt="Chrome" className="chromeHalf" />
                </div>
                <span className="rating-start">⭐⭐⭐⭐⭐ 5/5</span>
              </div>
              <div className="rating-pill">
                <div className="rating-pill-img">
              <img src={victor} alt="victor" className="victor-logo" />
                </div>
                <span className="rating-start">⭐⭐⭐⭐⭐ 5/5</span>
              </div>
            </div>
            {/* CTAs */}
            <div className="hero-main-actions">
              <button className="btn-chrome">
                <span>Available in</span>
                <strong>Chrome Web Store</strong>
               
    <div className="chrome-circle">
      <img
        src={chromeImage}
        alt="Chrome Icon"
        className="chrome-icon"
      />
    </div>
              </button>
           
              <button size="large" className="free-trial">
                Get a Free Trial Now!
              </button>
             
            </div>
          </div>
        </section>
        {/* Placeholder for the feature grid you had before */}
{/* Value Proposition Ribbon */}
<div className="feature-ribbon">
  <div className="feature-item">
    <span className="feature-icon">
      <img src={adobeExpress} alt="adobe-express" className="adobe-express" />
    </span>
    <p>Access to <span>700M+ Contacts</span></p>
  </div>
  <div className="feature-item">
    <span className="feature-icon">
    <img src={cursorPointer} alt="cursor-pointer" className="cursor-pointer" />
    </span>
    <p><span>One click push</span> to CRM</p>
  </div>
  <div className="feature-item">
    <span className="feature-icon">
      <img src={carban} alt="carban-icon" className="carban-icon" />
    </span>
    <p><span>Custom Field</span> Mapping</p>
  </div>
  <div className="feature-item">
    <span className="feature-icon">
    <img src={WaterFall} alt="water-fall" className="water-fall" />
    </span>
    <p>Advanced <span>Waterfall Enrichment</span></p>
  </div>
</div>      
<div className="hr-div"><hr className="bottom-hr"></hr></div>
      </main>
    )
}