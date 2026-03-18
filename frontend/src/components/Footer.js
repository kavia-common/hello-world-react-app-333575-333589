import React from "react";

/**
 * OTT App Footer Component
 */
export default function Footer() {
  return (
    <footer className="ott-footer" aria-label="Site footer">
      <div className="ott-footer__grid">
        {/* Brand */}
        <div>
          <div className="ott-footer__brand-logo">
            <div className="ott-nav__logo-icon" aria-hidden="true">S</div>
            <span className="ott-nav__logo-text">
              Stream<span>Vault</span>
            </span>
          </div>
          <p className="ott-footer__brand-desc">
            Your ultimate destination for movies, TV shows, and original
            content. Stream anywhere, anytime.
          </p>
          <div className="ott-footer__social" aria-label="Social media links">
            {[
              { label: "Facebook", icon: "f" },
              { label: "Twitter/X", icon: "𝕏" },
              { label: "Instagram", icon: "📷" },
              { label: "YouTube", icon: "▶" },
            ].map(({ label, icon }) => (
              <button
                key={label}
                className="ott-footer__social-btn"
                aria-label={label}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <div className="ott-footer__col-title">Company</div>
          {["About Us", "Careers", "Press", "Blog", "Investor Relations"].map(
            (link) => (
              <span
                key={link}
                className="ott-footer__link"
                role="link"
                tabIndex={0}
              >
                {link}
              </span>
            )
          )}
        </div>

        {/* Content */}
        <div>
          <div className="ott-footer__col-title">Content</div>
          {["Movies", "TV Shows", "Originals", "Documentaries", "Kids & Family"].map(
            (link) => (
              <span
                key={link}
                className="ott-footer__link"
                role="link"
                tabIndex={0}
              >
                {link}
              </span>
            )
          )}
        </div>

        {/* Support */}
        <div>
          <div className="ott-footer__col-title">Support</div>
          {[
            "Help Center",
            "Contact Us",
            "Manage Account",
            "Supported Devices",
            "Accessibility",
          ].map((link) => (
            <span
              key={link}
              className="ott-footer__link"
              role="link"
              tabIndex={0}
            >
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ott-footer__bottom">
        <p className="ott-footer__copyright">
          © 2024 StreamVault Inc. All rights reserved.
        </p>
        <div className="ott-footer__legal-links">
          {["Privacy Policy", "Terms of Service", "Cookie Preferences"].map(
            (link) => (
              <span
                key={link}
                className="ott-footer__legal-link"
                role="link"
                tabIndex={0}
              >
                {link}
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
