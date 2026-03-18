import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * DetailContext - Manages the bottom-sheet detail modal for content items.
 */
const DetailContext = createContext(null);

// PUBLIC_INTERFACE
export function DetailProvider({ children }) {
  /** Provides detail sheet state and open/close functions. */
  const [detail, setDetail] = useState({
    open: false,
    title: '',
    meta: '',
    desc: '',
    colorClass: 'card-color-1',
    rating: '8.5',
  });

  // PUBLIC_INTERFACE
  const showDetail = useCallback((title, meta, desc, colorClass, rating = '8.5') => {
    /** Opens the detail bottom sheet. */
    setDetail({ open: true, title, meta, desc, colorClass, rating });
  }, []);

  // PUBLIC_INTERFACE
  const closeDetail = useCallback(() => {
    /** Closes the detail bottom sheet. */
    setDetail((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <DetailContext.Provider value={{ detail, showDetail, closeDetail }}>
      {children}
    </DetailContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useDetail() {
  /** Hook to access detail sheet state and functions. */
  const ctx = useContext(DetailContext);
  if (!ctx) throw new Error('useDetail must be used within DetailProvider');
  return ctx;
}
