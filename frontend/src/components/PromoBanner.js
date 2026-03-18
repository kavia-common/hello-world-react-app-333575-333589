import React from 'react';
import { useToast } from '../context/ToastContext';

/**
 * PromoBanner - Featured promotional banner for premium upgrades.
 */

// PUBLIC_INTERFACE
function PromoBanner() {
  /** Renders a promotional banner encouraging users to upgrade to premium. */
  const { showToast } = useToast();

  return (
    <section aria-label="Premium promotion" style={{ marginBottom: 'var(--spacing-2xl)' }}>
      <div
        className="banner-card"
        onClick={() => showToast('Upgrade to Premium!')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') showToast('Upgrade to Premium!'); }}
        aria-label="Go Premium - 3 Months Free"
      >
        <div
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(229,9,20,0.3), rgba(108,99,255,0.3))', zIndex: 1 }}
          aria-hidden="true"
        />
        <div className="banner-card__content">
          <div className="banner-card__label">Limited Time</div>
          <div className="banner-card__title">Go Premium — 3 Months Free</div>
          <div className="banner-card__sub">Ad-free · 4K Ultra HD · 5 screens</div>
        </div>
        <button
          className="banner-card__cta"
          onClick={(e) => { e.stopPropagation(); showToast('Opening Premium plans…'); }}
          aria-label="Get 3 months free Premium"
        >
          Get Free
        </button>
      </div>
    </section>
  );
}

export default PromoBanner;
