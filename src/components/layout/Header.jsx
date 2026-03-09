import { useState } from "react";
import "./Header.css";
import { Button } from "../customButton/Button";
import { Logo } from "../logo/Logo";
import { ChevronDown, LogIn } from "lucide-react";

// Reusable, configurable header matching the LeadCRM Figma nav
export const Header = ({
  navLinks = [
    {
      label: "Product",
      href: "#product",
      icon: <ChevronDown size={18} strokeWidth={4} color="#000000" />,
    },
    { label: "Pricing", href: "#pricing" },
    {
      label: "Resources",
      href: "#resources",
      icon: <ChevronDown size={18} strokeWidth={4} color="#000000" />,
    },
    {
      label: "Company",
      href: "#company",
      icon: <ChevronDown size={18} strokeWidth={4} color="#000000" />,
    },
  ],
  primaryAction = {
    label: "Get Your Free Account",
    href: "#get-your-free-account",
  },
  secondaryAction = {
    label: "Login",
    icon: <LogIn size={16} />,
    href: "#login",
  },
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <a href="#top" className="header-logo">
            {/* <span className="header-logo-mark" /> */}
            <span className="header-logo-text">
              <Logo className="nav-logo" />
            </span>
          </a>
        </div>

        <nav className={`header-nav ${menuOpen ? "is-open" : ""}`}>
          <ul className="header-nav-list">
            {navLinks.map((item) => (
              <li key={item.label} className="header-nav-item">
                <button type="button" className="header-nav-link">
                  <span>{item.label}</span>
                  {item.icon && (
                    <span className="header-nav-icon">{item.icon}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          {primaryAction && (
            <Button
              variant="primary"
              size="small"
              className="header-primary-btn"
            >
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              variant="secondary"
              size="small"
              className="header-secondary-btn"
            >
              {secondaryAction.icon && (
                <span className="header-secondary-icon">
                  {secondaryAction.icon}
                </span>
              )}
              <span>{secondaryAction.label}</span>
            </Button>
          )}
        </div>

        <button
          className={`header-menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
