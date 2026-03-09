import { Logo } from "../logo/Logo";
import fbIcon from "../../assets/images/fb-image.png";
import xIcon from "../../assets/images/x-image.png";
import linkIcon from "../../assets/images/link-icon.png";
import telegramIcon from "../../assets/images/telegram-image.png";
import chromeImage from "../../assets/images/chrome-logo.png";
import supportIcon from "../../assets/images/support-icon.png";
import helpIcon from "../../assets/images/help-icon.png";
import contactIcon from "../../assets/images/contact-icon.png";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-brand">
          <h2 className="logo">
            <Logo className="footer-logo" />
          </h2>
          <p className="footer-desc">
            LeadCRM is LinkedIn integration tool for your CRM.
          </p>

          <div className="social-icons">
            <span>
              <img src={fbIcon} alt="facebook" className="fb-icon" />
            </span>
            <span>
              <img src={xIcon} alt="twitter" className="x-icon" />
            </span>
            <span>
              <img src={linkIcon} alt="linkedin" className="link-icon" />
            </span>
            <span>
              <img
                src={telegramIcon}
                alt="telegram"
                className="telegram-icon"
              />
            </span>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Integrations</h3>
          <ul>
            <li>HubSpot</li>
            <li>Salesforce</li>
            <li>Pipedrive</li>
            <li>
              Close.io
              <span className="coming-soon">Coming Soon</span>
            </li>
            <li>
              Insightly
              <span className="coming-soon">Coming Soon</span>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Alternative</h3>
          <ul>
            <li>Surfe VS LeadCRM</li>
            <li>Linkmatch Alternative</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <img src={supportIcon} alt="support" className="support-icon" />
            support@leadcrm.io
          </p>
          <p>
            <img src={contactIcon} alt="contact" className="contact-icon" />
            +1 231-538-7466
          </p>
          <p>
            <img src={helpIcon} alt="help" className="help-icon" />
            Help Center
          </p>

          {/* <button className="chrome-btn">Available in Chrome</button> */}
          <button className="ftr-btn-chrome">
            <span>Available in</span>
            <strong>Chrome</strong>

            <div className="footer-chrome-circle">
              <img
                src={chromeImage}
                alt="Chrome Icon"
                className="footer-chrome-icon"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="footer-bottom">
        <p className="disclaimer">
          Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
          LinkedIn(tm) logos and trademarks displayed on this tool are property
          of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at
          your own risk.
        </p>

        <p className="copyright">
          Copyright © 2026 LeadCRM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
