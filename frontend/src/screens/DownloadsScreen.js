import React from 'react';
import { useToast } from '../context/ToastContext';
import { downloadsContent } from '../data/content';
import { DownloadedIcon, DownloadingIcon } from '../components/Icons';

/**
 * DownloadsScreen - Displays the user's downloaded content.
 */

// PUBLIC_INTERFACE
function DownloadsScreen() {
  /** Renders the downloads screen listing all downloaded and downloading items. */
  const { showToast } = useToast();

  return (
    <div id="screen-downloads" className="page downloads-screen" role="main">
      <h1 className="downloads-screen__title">Downloads</h1>
      {downloadsContent.map((item) => (
        <article
          key={item.id}
          className="download-item"
          onClick={() => showToast(`Playing ${item.title} offline…`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') showToast(`Playing ${item.title} offline…`); }}
          aria-label={`${item.title} - ${item.meta}`}
        >
          <div className="download-item__thumb">
            <div className={item.colorClass} style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-sm)' }} aria-hidden="true" />
          </div>
          <div className="download-item__info">
            <div className="download-item__title">{item.title}</div>
            <div className="download-item__meta">{item.meta}</div>
          </div>
          <div className="download-item__actions" aria-hidden="true">
            {item.status === 'downloaded' ? <DownloadedIcon size={20} /> : <DownloadingIcon size={20} />}
          </div>
        </article>
      ))}
    </div>
  );
}

export default DownloadsScreen;
