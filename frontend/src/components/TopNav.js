import React, { useEffect, useState } from 'react';
import { useNavigation, SCREENS } from '../context/NavigationContext';
import { useToast } from '../context/ToastContext';
import { SearchIcon, BellIcon } from './Icons';

/**
 * TopNav - Fixed top navigation bar.
 * Becomes opaque with blur when user scrolls.
 */

// PUBLIC_INTERFACE
function TopNav() {
  /** Renders the top navigation bar with logo, search, notifications, and profile avatar. */
  const { switchScreen } = useNavigation();
  const { showToast } = useToast();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`top-nav${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="top-nav__logo" aria-label="OTT APP Home">
        <div className="top-nav__logo-icon" aria-hidden="true">O</div>
        <span className="top-nav__logo-text">OTT<span>+</span></span>
      </div>
      <nav className="top-nav__actions" aria-label="User actions">
        <button className="top-nav__action-btn" onClick={() => switchScreen(SCREENS.SEARCH)} aria-label="Search">
          <SearchIcon />
        </button>
        <button className="top-nav__action-btn" onClick={() => showToast('No new notifications')} aria-label="Notifications">
          <BellIcon />
          <span className="top-nav__notification-dot" aria-hidden="true" />
        </button>
        <div
          className="top-nav__avatar"
          onClick={() => switchScreen(SCREENS.PROFILE)}
          role="button"
          tabIndex={0}
          aria-label="Profile"
          onKeyDown={(e) => { if (e.key === 'Enter') switchScreen(SCREENS.PROFILE); }}
        >
          J
        </div>
      </nav>
    </header>
  );
}

export default TopNav;
