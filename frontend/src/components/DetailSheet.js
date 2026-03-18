import React, { useEffect } from 'react';
import { useDetail } from '../context/DetailContext';
import { useToast } from '../context/ToastContext';
import { PlayIcon, PlusIcon, ShareIcon } from './Icons';

/**
 * DetailSheet - Bottom sheet modal for content details.
 * Follows WAI-ARIA dialog pattern.
 */

// PUBLIC_INTERFACE
function DetailSheet() {
  /** Renders the sliding bottom sheet with content details and action buttons. */
  const { detail, closeDetail } = useDetail();
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape' && detail.open) closeDetail(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [detail.open, closeDetail]);

  useEffect(() => {
    document.body.style.overflow = detail.open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [detail.open]);

  const handleBackdropClick = (e) => { if (e.target === e.currentTarget) closeDetail(); };

  return (
    <div
      className={`detail-overlay${detail.open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Content Detail"
      onClick={handleBackdropClick}
    >
      <div className="detail-sheet">
        <div className="detail-sheet__handle" aria-hidden="true" />
        <div className="detail-sheet__header">
          <div className="detail-sheet__thumb">
            <div className={detail.colorClass} style={{ width: '100%', height: '100%' }} aria-hidden="true" />
          </div>
          <div className="detail-sheet__info">
            <div className="detail-sheet__title">{detail.title}</div>
            <div className="detail-sheet__meta">{detail.meta}</div>
            <div className="detail-sheet__tag-row">
              <span className="tag tag-gold">⭐ {detail.rating}</span>
              <span className="tag">HD</span>
            </div>
            <div className="detail-sheet__desc">{detail.desc}</div>
          </div>
        </div>
        <div className="detail-sheet__actions">
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => { showToast('Playing…'); closeDetail(); }}>
            <PlayIcon size={16} color="#fff" />
            Play Now
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Added to My List')}>
            <PlusIcon size={16} />
            My List
          </button>
          <button className="btn btn-outline" onClick={() => showToast('Link copied!')} aria-label="Share">
            <ShareIcon size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailSheet;
