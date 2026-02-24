import "./App.css";
import { Button, Header } from "./components";

function App() {
  return (
    <>
      <Header />

      <main className="page-shell">
        <section className="hero" id="product">
          <div className="hero-left">
            <div className="hero-tag">
              <span className="hero-tag-pill">New</span>
              <span>One-click LinkedIn CRM for GTM teams</span>
            </div>

            <h1 className="hero-title">
              Close more deals with{" "}
              <span>LeadCRM&apos;s smart pipeline</span>
            </h1>

            <p className="hero-subtitle">
              Automatically capture LinkedIn conversations, sync contacts, and
              keep your pipeline always up to date – without switching tabs.
            </p>

            <div className="hero-actions">
              <Button size="large">Start free trial</Button>
              <a href="#demo" className="hero-secondary-link">
                <span>Book a live demo</span>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M5 10h8.5M10 4.5 15.5 10 10 15.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="hero-metas">
              <span>
                <strong>2,000+ teams</strong> use LeadCRM daily
              </span>
              <span>
                <strong>4.9/5</strong> from GTM leaders
              </span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-title">LinkedIn inbox · Lead sync</div>
                <span className="hero-card-pill">Live preview</span>
              </div>

              <div className="hero-card-body">
                <ul className="hero-list">
                  <li>
                    <span className="hero-list-dot" />
                    <span>Capture profiles from LinkedIn with one click</span>
                  </li>
                  <li>
                    <span className="hero-list-dot" />
                    <span>Enrich leads with company and email data</span>
                  </li>
                  <li>
                    <span className="hero-list-dot" />
                    <span>Sync to your CRM without leaving the tab</span>
                  </li>
                </ul>

                <div className="hero-preview">
                  <div className="hero-preview-bar" />
                  <div className="hero-preview-stat">
                    +38% more replies · Q1 cohort
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="section-heading">
            <p className="section-eyebrow">Why LeadCRM?</p>
            <h2 className="section-title">Designed for modern GTM teams</h2>
            <p className="section-subtitle">
              Everything you need to turn conversations into qualified pipeline
              in one streamlined workspace.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div
                className="feature-icon"
                style={{ background: "rgba(37,99,235,0.08)", color: "#2563eb" }}
              >
                ✓
              </div>
              <h3 className="feature-title">One-click LinkedIn capture</h3>
              <p className="feature-desc">
                Add prospects, notes, and conversation history straight from
                LinkedIn without manual data entry.
              </p>
            </article>

            <article className="feature-card">
              <div
                className="feature-icon"
                style={{ background: "rgba(16,185,129,0.08)", color: "#059669" }}
              >
                ⚡
              </div>
              <h3 className="feature-title">Automatic CRM sync</h3>
              <p className="feature-desc">
                Keep Salesforce, HubSpot, and your inbox perfectly aligned with
                background sync rules.
              </p>
            </article>

            <article className="feature-card">
              <div
                className="feature-icon"
                style={{ background: "rgba(234,179,8,0.12)", color: "#b45309" }}
              >
                📊
              </div>
              <h3 className="feature-title">Deal health insights</h3>
              <p className="feature-desc">
                See risk alerts, multi-threading coverage, and next-best actions
                for every opportunity.
              </p>
            </article>
          </div>
        </section>

        <footer className="footer" id="company">
          <span>© {new Date().getFullYear()} LeadCRM. All rights reserved.</span>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
