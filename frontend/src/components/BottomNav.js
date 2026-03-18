import React from 'react';
import { useNavigation, SCREENS } from '../context/NavigationContext';
import { HomeIcon, SearchIcon, DownloadIcon, ListIcon, ProfileIcon } from './Icons';

/**
 * BottomNav - Fixed bottom navigation bar with 5 tabs.
 */

const NAV_ITEMS = [
  { id: SCREENS.HOME, label: 'Home', Icon: HomeIcon },
  { id: SCREENS.SEARCH, label: 'Search', Icon: SearchIcon },
  { id: SCREENS.DOWNLOADS, label: 'Downloads', Icon: DownloadIcon },
  { id: SCREENS.MYLIST, label: 'My List', Icon: ListIcon },
  { id: SCREENS.PROFILE, label: 'Profile', Icon: ProfileIcon },
];

// PUBLIC_INTERFACE
function BottomNav() {
  /** Renders the bottom navigation bar with active state indicator. */
  const { activeScreen, switchScreen } = useNavigation();

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {NAV_ITEMS.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`bottom-nav__item${activeScreen === id ? ' active' : ''}`}
          onClick={() => switchScreen(id)}
          aria-label={label}
          aria-current={activeScreen === id ? 'page' : undefined}
        >
          <span className="bottom-nav__icon" aria-hidden="true">
            <Icon size={22} />
          </span>
          <span className="bottom-nav__label">{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
