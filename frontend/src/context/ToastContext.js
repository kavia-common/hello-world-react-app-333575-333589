import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

/**
 * ToastContext - Global notification system.
 * Provides showToast(message) to all child components.
 */
const ToastContext = createContext(null);

// PUBLIC_INTERFACE
export function ToastProvider({ children }) {
  /** Manages toast notification state. */
  const [toast, setToast] = useState({ message: '', visible: false });
  const timerRef = useRef(null);

  // PUBLIC_INTERFACE
  const showToast = useCallback((message) => {
    /** Displays a toast notification for 2.5 seconds. */
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ message, visible: true });
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2500);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={`toast${toast.visible ? ' show' : ''}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {toast.message}
      </div>
    </ToastContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useToast() {
  /** Hook to access the toast notification function. */
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
