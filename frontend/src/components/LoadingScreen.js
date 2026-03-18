import React from 'react';

/**
 * LoadingScreen - Initial loading overlay shown while the app boots.
 */

// PUBLIC_INTERFACE
function LoadingScreen() {
  /** Renders the full-screen loading overlay. */
  return (
    <div className="loading-overlay" role="status" aria-label="Loading OTT APP" aria-live="polite">
      <div className="loading-logo">OTT<span style={{ color: '#fff' }}>+</span></div>
      <div className="loading-spinner" aria-hidden="true" />
    </div>
  );
}

export default LoadingScreen;
