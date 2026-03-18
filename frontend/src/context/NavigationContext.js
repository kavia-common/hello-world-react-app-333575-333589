import React, { createContext, useContext, useState } from 'react';

/**
 * NavigationContext - Manages active screen state.
 * Screens: home, search, downloads, mylist, profile
 */
const NavigationContext = createContext(null);

export const SCREENS = {
  HOME: 'home',
  SEARCH: 'search',
  DOWNLOADS: 'downloads',
  MYLIST: 'mylist',
  PROFILE: 'profile',
};

// PUBLIC_INTERFACE
export function NavigationProvider({ children }) {
  /** Provides navigation state and switchScreen to all children. */
  const [activeScreen, setActiveScreen] = useState(SCREENS.HOME);

  // PUBLIC_INTERFACE
  const switchScreen = (screen) => {
    /** Switches the currently visible screen. */
    if (Object.values(SCREENS).includes(screen)) {
      setActiveScreen(screen);
    }
  };

  return (
    <NavigationContext.Provider value={{ activeScreen, switchScreen }}>
      {children}
    </NavigationContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useNavigation() {
  /** Hook to access navigation state and functions. */
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
