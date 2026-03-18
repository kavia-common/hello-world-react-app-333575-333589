import React from "react";

/**
 * OTT App Movie Card Component
 * Variants: poster (2:3), landscape (16:9), large
 */
export default function MovieCard({
  title,
  year,
  runtime,
  rating,
  isNew,
  genres,
  bgColor,
  emoji,
  variant = "poster",
  progress,
  episode,
  onPlay,
}) {
  const variantClass = `ott-card--${variant}`;

  if (variant === "continue") {
    return (
      <article
        className="ott-continue-card"
        role="listitem"
        aria-label={`Continue watching: ${title}`}
        onClick={() => onPlay && onPlay(title)}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onPlay && onPlay(title)}
      >
        <div className="ott-continue-card__image-wrap">
          <div
            className="ott-continue-card__image-placeholder"
            style={{ background: bgColor || "linear-gradient(135deg,#1A1A2E,#16213E)" }}
          >
            {emoji || "🎬"}
          </div>
          <div className="ott-continue-card__overlay">
            <div className="ott-continue-card__play" aria-hidden="true">
              ▶
            </div>
          </div>
          <div className="ott-continue-card__progress-bar">
            <div
              className="ott-continue-card__progress-fill"
              style={{ width: `${progress || 50}%` }}
              role="progressbar"
              aria-valuenow={progress || 50}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        <div className="ott-continue-card__info">
          <div className="ott-continue-card__title">{title}</div>
          <div className="ott-continue-card__episode">
            {episode || "Episode 1"}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`ott-card ${variantClass}`}
      role="listitem"
      data-genres={(genres || []).join(",").toLowerCase()}
      aria-label={title}
      onClick={() => onPlay && onPlay(title)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onPlay && onPlay(title)}
    >
      <div className="ott-card__image-wrapper">
        <div
          className="ott-card__image-placeholder"
          style={{
            background:
              bgColor ||
              "linear-gradient(135deg, var(--color-bg-tertiary), var(--color-bg-elevated))",
          }}
        >
          {emoji || "🎬"}
          <span>{title}</span>
        </div>

        {rating && (
          <div className="ott-card__rating-badge">★ {rating}</div>
        )}
        {isNew && (
          <div className="ott-card__new-badge">NEW</div>
        )}

        <div className="ott-card__overlay">
          <div className="ott-card__play-btn" aria-hidden="true">
            ▶
          </div>
          <div className="ott-card__title">{title}</div>
          <div className="ott-card__meta">
            {year && <span>{year}</span>}
            {year && runtime && <span>•</span>}
            {runtime && <span>{runtime}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}
