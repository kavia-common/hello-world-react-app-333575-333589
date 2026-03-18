import React, { useState, useEffect } from "react";

/**
 * OTT App Navigation Header Component
 * Features: Logo, nav links, search, notifications, user avatar
 */
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "movies", label: "Movies" },
  { id: "tvshows", label: "TV Shows" },
  { id: "originals", label: "Originals" },
  { id: "mylist", label: "My List" },
];

export default function Header({ activeNav, onNavChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  return (
    <nav
      className={`ott-nav${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a className="ott-nav__logo" href="#" aria-label="StreamVault Home">
        <div className="ott-nav__logo-icon">S</div>
        <span className="ott-nav__logo-text">
          Stream<span>Vault</span>
        </span>
      </a>

      {/* Nav Links */}
      <ul className="ott-nav__links" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <span
              className={`ott-nav__link${activeNav === link.id ? " active" : ""}`}
              role="menuitem"
              tabIndex={0}
              onClick={() => onNavChange && onNavChange(link.id)}
              onKeyDown={(e) =>
                e.key === "Enter" && onNavChange && onNavChange(link.id)
              }
            >
              {link.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="ott-nav__actions">
        <form
          className="ott-nav__search-form"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "var(--color-text-tertiary)", flexShrink: 0 }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            className="ott-nav__search-input"
            type="search"
            placeholder="Search movies, shows…"
            aria-label="Search content"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </form>

        <button
          className="ott-nav__icon-btn"
          aria-label="Notifications"
          title="Notifications"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span
            className="ott-nav__notification-badge"
            aria-label="3 new notifications"
          />
        </button>

        <div
          className="ott-nav__avatar"
          role="button"
          aria-label="User profile"
          tabIndex={0}
        >
          U
        </div>
      </div>
    </nav>
  );
}
