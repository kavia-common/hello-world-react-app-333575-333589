import React, { useState, useEffect } from 'react';
import { ToastProvider } from './context/ToastContext';
import { NavigationProvider, useNavigation, SCREENS } from './context/NavigationContext';
import { DetailProvider } from './context/DetailContext';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import DetailSheet from './components/DetailSheet';
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import MyListScreen from './screens/MyListScreen';
import ProfileScreen from './screens/ProfileScreen';

/**
 * AppContent - Inner app shell that handles screen routing.
 * Renders the appropriate screen based on active navigation state.
 */
function AppContent() {
  const { activeScreen } = useNavigation();

  return (
    <div className="app-shell">
      <TopNav />
      {activeScreen === SCREENS.HOME && <HomeScreen />}
      {activeScreen === SCREENS.SEARCH && <SearchScreen />}
      {activeScreen === SCREENS.DOWNLOADS && <DownloadsScreen />}
      {activeScreen === SCREENS.MYLIST && <MyListScreen />}
      {activeScreen === SCREENS.PROFILE && <ProfileScreen />}
      <BottomNav />
      <DetailSheet />
    </div>
  );
}

/**
 * App - Root application component.
 *
 * Architecture:
 * - ToastProvider: Global notification system
 * - NavigationProvider: Screen switching state
 * - DetailProvider: Content detail sheet state
 * - AppContent: Main app UI with routing
 *
 * Flow:
 * 1. App mounts → shows LoadingScreen for 1.5s
 * 2. After loading → renders full AppContent
 */

// PUBLIC_INTERFACE
function App() {
  /** Root component managing loading state and context providers. */
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <ToastProvider>
      <NavigationProvider>
        <DetailProvider>
          <AppContent />
        </DetailProvider>
      </NavigationProvider>
    </ToastProvider>
  );
}

export default App;
