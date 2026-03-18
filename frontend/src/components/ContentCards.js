import React from 'react';
import { useDetail } from '../context/DetailContext';
import { useToast } from '../context/ToastContext';
import { PlayIcon } from './Icons';

/**
 * ContentCards - Reusable card components for portrait and landscape layouts.
 */

// PUBLIC_INTERFACE
export function PortraitCard({ item }) {
  /** Renders a portrait-orientation content card. */
  const { showDetail } = useDetail();
  const { showToast } = useToast();

  const handleClick = () => {
    if (item.detailMeta && item.desc) {
      showDetail(item.title, item.detailMeta, item.desc, item.colorClass);
    } else {
      showToast(`Opening ${item.title}…`);
    }
  };

  return (
    <article
      className="card-portrait"
      onClick={handleClick}
      role="listitem"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
      aria-label={item.title}
    >
      <div className="card-portrait__image-wrap">
        <div className={item.colorClass} style={{ width: '100%', height: '100%' }} aria-hidden="true" />
        {item.rank && <span className="card-portrait__rank" aria-hidden="true">{item.rank}</span>}
        {item.badge && <span className="card-portrait__badge">{item.badge}</span>}
        <div className="card-portrait__overlay" aria-hidden="true">
          <div className="card-portrait__play-icon">
            <PlayIcon size={16} color="#0f0f0f" />
          </div>
        </div>
      </div>
      <div className="card-portrait__title">{item.title}</div>
      <div className="card-portrait__meta">{item.meta}</div>
    </article>
  );
}

// PUBLIC_INTERFACE
export function LandscapeCard({ item }) {
  /** Renders a landscape-orientation card for "Continue Watching" with progress bar. */
  const { showDetail } = useDetail();

  const handleClick = () => {
    if (item.detailMeta && item.desc) {
      showDetail(item.title, item.detailMeta, item.desc, item.colorClass);
    }
  };

  return (
    <article
      className="card-landscape"
      onClick={handleClick}
      role="listitem"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
      aria-label={`${item.title} - ${item.meta}`}
    >
      <div className="card-landscape__image-wrap">
        <div
          className={item.colorClass}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-hidden="true"
        >
          <PlayIcon size={32} color="rgba(255,255,255,0.25)" />
        </div>
        <div className="card-landscape__progress-track">
          <div
            className="card-landscape__progress-fill"
            style={{ width: `${item.progress}%` }}
            role="progressbar"
            aria-valuenow={item.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${item.progress}% watched`}
          />
        </div>
        {item.episode && <span className="card-landscape__episode-badge">{item.episode}</span>}
        <div className="card-landscape__play-overlay" aria-hidden="true">
          <div className="card-landscape__play-icon">
            <PlayIcon size={16} color="#0f0f0f" />
          </div>
        </div>
      </div>
      <div className="card-landscape__title">{item.title}</div>
      <div className="card-landscape__meta">{item.meta}</div>
    </article>
  );
}

// PUBLIC_INTERFACE
export function ContentSection({ title, items, cardType = 'portrait', onSeeAll }) {
  /** Renders a titled horizontal scrollable row of content cards. */
  const { showToast } = useToast();

  const handleSeeAll = () => {
    if (onSeeAll) onSeeAll();
    else showToast(`See all – ${title}`);
  };

  return (
    <section className="section" aria-label={title}>
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
        <button className="section__see-all" onClick={handleSeeAll} aria-label={`See all ${title}`}>
          See all
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="card-row" role="list">
        {items.map((item) =>
          cardType === 'landscape'
            ? <LandscapeCard key={item.id} item={item} />
            : <PortraitCard key={item.id} item={item} />
        )}
      </div>
    </section>
  );
}
