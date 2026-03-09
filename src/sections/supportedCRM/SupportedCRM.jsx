import "./supportedcrm.css";

import bannerThumb from "../../assets/images/banner-thumb.png";
import collabrationImg from "../../assets/images/collaboration.png";
import crmIcon from "../../assets/images/crm-image.png";
import chromeImage from "../../assets/images/chrome-logo.png";
import salesforce from "../../assets/images/salesforce.png";
import pipedrive from "../../assets/images/pipedrive.png";
import hubspot from "../../assets/images/hubspot.png";
import zoho from "../../assets/images/zoho.png";
import contactIcon from "../../assets/images/contactsIcon.png";
import companyIcon from "../../assets/images/companyIcon.png";
import conversationIcon from "../../assets/images/conversationIcon.png";
import linkdiIcon from "../../assets/images/linkdinIcon.png";

// import chatIcon from "../../components/icons/ChatIcon";

export const SupportedCRM = () => {
  return (
    <section className="supported-crm">
      {/* Top Decoration */}
      <img src={bannerThumb} alt="decoration" className="crm-top-decoration" />

      <div className="container">
        {/* Heading */}
        <div className="crm-header">
          <h2>Our Supported LeadCRM</h2>
          <p>
            LeadCRM provides Native Integrations with popular CRM tools to make
            the most out of your LinkedIn prospecting. We don’t want you to miss
            any revenue opportunity on the internet!
          </p>
        </div>

        {/* Integration Graphic */}
        {/* <div className="crm-main"> */}
        <div className="crm-graphic">
          <div className="left-icons">
            <div className="left-icon-containt">
              <div className="node node-conversation">
                <div className="crm-node-circle">
                  <img src={conversationIcon} alt="" />
                </div>
                <span className="text-icon-span">
                  <img
                    src={linkdiIcon}
                    alt="linkdin icon"
                    className="crm-linkdin-icon"
                  />
                  Conversation
                </span>
              </div>
              <span className="badges-title">Conversations</span>
            </div>
            <div className="left-icon-containt">
              <div className="node node-contact">
                <div className="crm-node-circle">
                  <img src={contactIcon} alt="" />
                </div>
                <span className="text-icon-span">
                  <img
                    src={linkdiIcon}
                    alt="linkdin icon"
                    className="crm-linkdin-icon"
                  />
                  Contacts
                </span>
              </div>
              <span className="badges-title">First Name</span>
              <span className="badges-title">Last Name</span>
            </div>

            <div className="left-icon-containt">
              <div className="node node-company">
                <div className="crm-node-circle">
                  <img src={companyIcon} alt="" />
                </div>
                <span className="text-icon-span">
                  <img
                    src={linkdiIcon}
                    alt="linkdin icon"
                    className="crm-linkdin-icon"
                  />
                  Companies
                </span>
              </div>
              <span className="badges-title">Company Employees</span>
              <span className="badges-title">Website</span>
            </div>
          </div>
          {/* CENTER */}
          <div className="crm-logo">
            <img src={crmIcon} alt="CRM Logo" className="crm-logo-img" />
          </div>

          {/* RIGHT CARD */}
          <div className="node node-right">{/* your vertical CRM icons */}</div>
          <div className="supported-crm-main">
            <div className="crm-right-badges">
              <span className="crm-badge badges-emp">Employees</span>
              <span className="crm-badge badges-website">Website</span>
              <span className="crm-badge badges-conversations">
                Conversations
              </span>
              <span className="crm-badge badges-last-name">Last Name</span>
              <span className="crm-badge badges-first-name">First Name</span>
            </div>
            <div className="supported-crm-container">
              <div className="supported-crm-card">
                <div className="supported-crm-icons">
                  <div className="crm-icon-circle crm-hubspot">
                    <img
                      src={hubspot}
                      alt="hubspot"
                      className="crm-hubspot-icon"
                    />
                  </div>
                  <div className="crm-icon-circle crm-pipedrive">
                    <img
                      src={pipedrive}
                      alt="pipedrive"
                      className="crm-pipedrive-icon"
                    />
                  </div>
                  <div className="crm-icon-circle crm-salesforce">
                    <img
                      src={salesforce}
                      alt="salesforce"
                      className="crm-salesforce-icon"
                    />
                  </div>
                  <div className="crm-icon-circle crm-zoho">
                    <img
                      src={zoho}
                      alt="zoho image"
                      className="crm-zoho-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SVG CONNECTIONS */}
          <svg className="graph-lines" viewBox="0 0 1200 600">
            <path
              d="M150 120 C 300 120, 400 250, 600 250"
              stroke="#C7D7E2"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />

            <path
              d="M150 250 C 300 250, 400 250, 600 250"
              stroke="#C7D7E2"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />

            <path
              d="M150 380 C 300 380, 400 250, 600 250"
              stroke="#C7D7E2"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>
          {/* <div className="crm-logo" >
        <img src={crmIcon} alt="CRM Logo" className="crm-logo-img" />
        </div> */}
        </div>

        {/* CTA Button */}
        <div className="crm-cta">
          <button>Lets Integrate your CRM Now!</button>
        </div>
      </div>

      {/* Bottom Decoration */}
      <img
        src={collabrationImg}
        alt="decoration"
        className="collaboration imag"
      />
    </section>
  );
};
