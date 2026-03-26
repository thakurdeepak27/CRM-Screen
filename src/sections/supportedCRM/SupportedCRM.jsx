import "./Supportedcrm.css";

import bannerThumb from "../../assets/images/banner-thumb.png";
import collabrationImg from "../../assets/images/collaboration.png";
import crmIcon from "../../assets/images/crm-image.png";
import salesforce from "../../assets/images/salesforce.png";
import pipedrive from "../../assets/images/pipedrive.png";
import hubspot from "../../assets/images/hubspot.png";
import zoho from "../../assets/images/zoho.png";
import contactIcon from "../../assets/images/contactsIcon.png";
import companyIcon from "../../assets/images/companyIcon.png";
import conversationIcon from "../../assets/images/conversationIcon.png";
import linkdiIcon from "../../assets/images/linkdinIcon.png";
import vector1 from "../../assets/images/vector-1.png";
import vector2 from "../../assets/images/vector-2.png";
import vector3 from "../../assets/images/vector-3.png";
import vector4 from "../../assets/images/vector-4.png";
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
              <div className="node node-conversation node-1">
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
              <span className="badges-title conversations-1">
                Conversations
              </span>
            </div>
            <div className="left-icon-containt">
              <div className="node node-contact node-2">
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
              <span className="badges-title name-1">First Name</span>
              <span className="badges-title name-1">Last Name</span>
            </div>

            <div className="left-icon-containt">
              <div className="node node-company node-3">
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
              <span className="badges-title company-empl-1">
                Company Employees
              </span>
              <span className="badges-title website-1">Website</span>
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
              <span className="crm-badge badges-emp badge-1">Employees</span>
              <span className="crm-badge badges-website badge-2">Website</span>
              <span className="crm-badge badges-conversations badge-3">
                Conversations
              </span>
              <span className="crm-badge badges-last-name badge-4">
                Last Name
              </span>
              <span className="crm-badge badges-first-name badge-5">
                First Name
              </span>
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
          <img src={vector1} className="vector vector-1" />
          <img src={vector2} className="vector vector-2" />
          <img src={vector3} className="vector vector-3" />
          <img src={vector4} className="vector vector-4" />
        </div>
        <div className="vector-dots">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
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
