import { useState } from "react";
import "./Productshowcase.css";

import robotImage from "../../assets/images/robot-image.png";
import dropContactIcon from "../../assets/images/drop-contact-icon.png";
import shIcon from "../../assets/images/sh-icon.png";
import rocketIcon from "../../assets/images/rocket-icon.png";
import datamaIcon from "../../assets/images/datama-icon.png";
import cardImg1 from "../../assets/images/verified-card-image.png";
import cardImg2 from "../../assets/images/showcase-card2.png";
import arrowIcon from "../../assets/images/arrow-icon.png";
import contactMobIcon from "../../assets/images/contact-mob-icon.png";
import mailLockIcon from "../../assets/images/mail-lock-icon.png";
import rightIcon from "../../assets/images/right-icon.png";
import refreshIcon from "../../assets/images/refresh-loading-icons.png";
import bulkExportIcon from "../../assets/images/bulk-export-image.png";
import dataIntrgrationIcon from "../../assets/images/data-integration-icons.png";
import aiResponseIcon from "../../assets/images/brain-image.png";

import { ChevronRight, X } from "lucide-react";

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "CRM Data Enrichment",
      icon: dataIntrgrationIcon,
    },
    {
      label: "CRM Data Sync",
      icon: refreshIcon,
    },
    {
      label: "Bulk Export & Enrichment",
      icon: bulkExportIcon,
    },
    {
      label: "AI Productivity",
      icon: aiResponseIcon,
    },
  ];

  return (
    <section className="product-showcase">
      <img src={robotImage} alt="image" className="robot-image" />
      <div className="container">
        {/* Heading */}
        <div className="showcase-header">
          <h2>Complete LinkedIn Sales Solutions</h2>
          <p>Everything you need for professional LinkedIn prospecting</p>
        </div>

        {/* Tabs */}
        <div className="showcase-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                className={` ${tab.label === "CRM Data Sync" ? "refresh-icon" : "tab-icon"}`}
              />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Note */}
        <div className="showcase-note">
          <p>
            It’s hard to find the accurate contact data for every prospects by{" "}
            <span className="highlight-badge">Incomplete Data</span>
          </p>
        </div>

        {/* Content Cards */}
        <div className="showcase-content">
          {/* First Card (2 Images) */}
          <div className="feature-card">
            <h3 className="card-1-headig">
              Here is how LeadCRM tackles that situation.
            </h3>
            <span className="card-1-a-tag">
              Try LeadCRM Data Enrichment{" "}
              <ChevronRight size={16} color="#097737" stroke-width="3" />
            </span>

            <div className="card-images-row">
              <div className="card-left">
                <div className="check-icon">
                  <img
                    src={mailLockIcon}
                    alt="Mail Icon"
                    className="check-mail-icon"
                  />
                  <h2>Verified Email & Phone</h2>
                </div>

                <img
                  src={cardImg1}
                  alt="Feature Image 1"
                  className="card-image1"
                />
              </div>

              <div className="card-right">
                <img
                  src={cardImg2}
                  alt="Feature Image 2"
                  className="card-image2"
                />
              </div>
            </div>
          </div>

          {/* Second Card (1 Image) */}
          <div className="feature-card">
            <h3 className="card-2-heading">
              If it does not works for you ! try our{" "}
              <span className="card-2-a-tag">
                Advanced Waterfall Enrichment{" "}
                <ChevronRight size={16} color="#097737" stroke-width="3" />
              </span>
            </h3>

            <div className="waterfall-card">
              <div className="vendor-row step-1">
                <span className="vendor-label">Vendor 1</span>
                <div className="vendor-pill dropcontact">
                  <span className="logo">
                    <img
                      src={dropContactIcon}
                      alt="DropContact"
                      className="drop-contact-icon"
                    />
                  </span>
                  <span className="vendor-name">DropContact</span>
                </div>
                <span className="vendor-status">
                  <span className="x-icon">
                    <X size={20} color="#959595" />
                  </span>
                  <span className="contacts-not-found">Contacts Not Found</span>
                </span>
              </div>

              <div className="vendor-arrow arrow-1">
                <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
              </div>

              <div className="vendor-row step-2">
                <span className="vendor-label">Vendor 2</span>
                <div className="vendor-pill datagma">
                  <span className="logo">
                    <img
                      src={datamaIcon}
                      alt="Datagma"
                      className="datagma-icon"
                    />
                  </span>
                  Datagma
                </div>
                <span className="vendor-status">
                  <span className="x-icon">
                    <X size={20} color="#959595" />
                  </span>
                  <span className="contacts-not-found">Contacts Not Found</span>
                </span>
              </div>

              <div className="vendor-arrow arrow-2">
                <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
              </div>

              <div className="vendor-row step-3">
                <span className="vendor-label">Vendor 3</span>
                <div className="vendor-pill rocket">
                  <span className="logo">
                    <img
                      src={rocketIcon}
                      alt="Rocket Reach"
                      className="rocket-icon"
                    />
                  </span>
                  Rocket Reach
                </div>
                <span className="vendor-status">
                  <span className="x-icon">
                    <X size={20} color="#959595" />
                  </span>
                  <span className="contacts-not-found">Contacts Not Found</span>
                </span>
              </div>

              <div className="vendor-arrow arrow-3">
                <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
              </div>

              <div className="vendor-row step-4 success">
                <span className="vendor-label">Vendor 4</span>
                <div className="vendor-pill signal">
                  <span className="logo">
                    <img src={shIcon} alt="Signal Hire" className="sh-icon" />
                  </span>
                  Signal Hire
                </div>

                <div className="success-icons">
                  <span className="success-span">
                    <img
                      src={contactMobIcon}
                      alt="Contact Icon"
                      className="contact-mob-icon"
                    />
                    <img
                      src={rightIcon}
                      alt="Right Icon"
                      className="right-icon"
                    />
                  </span>
                  <span className="success-span">
                    <img
                      src={mailLockIcon}
                      alt="Mail Icon"
                      className="mail-lock-icon"
                    />
                    <img
                      src={rightIcon}
                      alt="Right Icon"
                      className="right-icon"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
