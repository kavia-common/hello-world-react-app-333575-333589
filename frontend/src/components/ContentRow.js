import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";

/**
 * OTT App Content Row Component
 * Horizontal scrollable row of movie/show cards with scroll buttons
 */
export default function ContentRow({ title, items, cardVariant, onPlay }) {
  const rowRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateButtons = () => {
    const el = rowRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = rowRef.current;
    if (el) {
      el.addEventListener("scroll", updateButtons, { passive: true });
      updateButtons();
    }
    return () => {
      if (el) el.removeEventListener("scroll", updateButtons);
    };
  }, []);

  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 600, behavior: "smooth" });
    }
  };

  return (
    <section className="ott-section" aria-labelledby={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <div className="ott-section__header">
        <h2
          className="ott-section__title"
          id={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {title}
        </h2>
        <span
          className="ott-section__see-all"
          role="button"
          tabIndex={0}
          aria-label={`See all ${title}`}
        >
          See All →
        </span>
      </div>

      <div className="ott-section__scroll-container">
        <button
          className="ott-section__scroll-btn ott-section__scroll-btn--left"
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          style={{ opacity: showLeft ? 1 : 0, pointerEvents: showLeft ? "auto" : "none" }}
        >
          ‹
        </button>

        <div className="ott-section__row" ref={rowRef} role="list">
          {items.map((item, index) => (
            <MovieCard
              key={`${item.title}-${index}`}
              {...item}
              variant={cardVariant || "poster"}
              onPlay={onPlay}
            />
          ))}
        </div>

        <button
          className="ott-section__scroll-btn ott-section__scroll-btn--right"
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          style={{ opacity: showRight ? 1 : 0, pointerEvents: showRight ? "auto" : "none" }}
        >
          ›
        </button>
      </div>
    </section>
  );
}
