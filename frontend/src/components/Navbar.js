import React, { useState } from 'react';
import sunIcon from '../assets/figma/icon-sun__1-44.svg';
import moonIcon from '../assets/figma/icon-moon__1-49.svg';

/**
 * Navbar component
 * Renders the top navigation bar with site title, menu links, and theme toggle.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Current dark mode state
 * @param {Function} props.onToggleDarkMode - Callback to toggle dark mode
 */
// PUBLIC_INTERFACE
function Navbar({ darkMode, onToggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* Blog author / brand */}
        <a href="#home" className="navbar__brand" aria-label="John McLane – home">
          John McLane
        </a>

        {/* Hamburger for mobile */}
        <button
          className="navbar__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

        {/* Navigation links */}
        <ul
          id="navbar-menu"
          className={`navbar__menu${menuOpen ? ' navbar__menu--open' : ''}`}
          role="list"
        >
          {['Blog', 'Projects', 'About', 'Newsletter'].map((item) => (
            <li key={item} className="navbar__item">
              <a
                href={`#${item.toLowerCase()}`}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Dark / light mode toggle */}
          <li className="navbar__item navbar__item--toggle">
            <button
              className="theme-toggle"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={darkMode}
              onClick={onToggleDarkMode}
            >
              <img
                src={sunIcon}
                alt=""
                aria-hidden="true"
                className="theme-toggle__icon theme-toggle__icon--sun"
              />
              <img
                src={moonIcon}
                alt=""
                aria-hidden="true"
                className="theme-toggle__icon theme-toggle__icon--moon"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
