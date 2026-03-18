import React, { useEffect } from "react";

/**
 * OTT App Video Player Modal Component
 */
export default function VideoModal({ title, isOpen, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose && onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="ott-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose && onClose()}
    >
      <div className="ott-modal">
        {/* Video Area */}
        <div className="ott-modal__video-area">
          <div className="ott-modal__video-placeholder">
            <span aria-hidden="true" style={{ fontSize: "64px", opacity: 0.15 }}>▶</span>
            <p>Video Player</p>
          </div>
          <button
            className="ott-modal__close"
            aria-label="Close video player"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Info */}
        <div className="ott-modal__info">
          <h2 className="ott-modal__title" id="modal-title">
            {title || "Shadow of Eternity"}
          </h2>
          <div className="ott-modal__meta">
            <span>★ 9.1</span>
            <span>•</span>
            <span>2024</span>
            <span>•</span>
            <span>2h 18m</span>
            <span>•</span>
            <span
              style={{
                border: "1px solid var(--color-text-tertiary)",
                padding: "1px 6px",
                borderRadius: "3px",
                fontSize: "11px",
              }}
            >
              16+
            </span>
          </div>
          <p className="ott-modal__desc">
            In a dystopian future where corporations rule the galaxy, one rogue
            detective uncovers a conspiracy that threatens to erase humanity's
            last hope for freedom.
          </p>
          <div className="ott-modal__actions">
            <button className="ott-btn ott-btn--primary">
              <span className="ott-btn__icon">▶</span> Play
            </button>
            <button className="ott-btn ott-btn--secondary">
              <span className="ott-btn__icon">+</span> My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
