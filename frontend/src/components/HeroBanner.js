import React, { useState, useEffect, useCallback } from "react";

/**
 * OTT App Hero Banner Component
 * Features: Auto-rotating featured content, CTA buttons, dot navigation
 */
const HERO_MOVIES = [
  {
    badge: "🔥 Trending #1",
    title: "Shadow of Eternity",
    rating: "9.1",
    year: "2024",
    runtime: "2h 18m",
    ageRating: "16+",
    genres: ["Action", "Sci-Fi", "Thriller"],
    description:
      "In a dystopian future where corporations rule the galaxy, one rogue detective uncovers a conspiracy that threatens to erase humanity's last hope for freedom.",
    bgColor:
      "linear-gradient(135deg, #1A1A2E 0%, #16213E 40%, #0F3460 100%)",
  },
  {
    badge: "⭐ Editor's Choice",
    title: "The Last Chronicle",
    rating: "8.7",
    year: "2024",
    runtime: "1h 52m",
    ageRating: "13+",
    genres: ["Drama", "Mystery", "Fantasy"],
    description:
      "A young historian discovers a hidden library containing books that rewrite history with every chapter read — but each revelation comes at a deadly cost.",
    bgColor:
      "linear-gradient(135deg, #2D1B69 0%, #11998E 100%)",
  },
  {
    badge: "🎭 Award Winner",
    title: "Neon Requiem",
    rating: "8.4",
    year: "2024",
    runtime: "2h 5m",
    ageRating: "18+",
    genres: ["Crime", "Noir", "Drama"],
    description:
      "When a legendary jazz musician returns to his hometown after 20 years of exile, he finds the city has changed — and so has everyone who once loved him.",
    bgColor:
      "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
  },
];

export default function HeroBanner({ onWatchNow }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [inMyList, setInMyList] = useState(false);

  const goToSlide = useCallback((index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % HERO_MOVIES.length;
      goToSlide(nextIndex);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, goToSlide]);

  const movie = HERO_MOVIES[currentIndex];

  return (
    <section className="ott-hero" aria-label="Featured content">
      {/* Background */}
      <div className="ott-hero__background">
        <div
          className="ott-hero__bg-fallback"
          style={{ background: movie.bgColor, transition: "background 0.8s ease" }}
        />
      </div>

      {/* Overlays */}
      <div className="ott-hero__overlay" aria-hidden="true" />
      <div className="ott-hero__overlay-bottom" aria-hidden="true" />

      {/* Content */}
      <div
        className="ott-hero__content"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <div className="ott-hero__badge">
          <span className="ott-hero__badge-icon">
            {movie.badge.split(" ")[0]}
          </span>
          {movie.badge.split(" ").slice(1).join(" ")}
        </div>

        <h1 className="ott-hero__title">{movie.title}</h1>

        <div className="ott-hero__meta">
          <span className="ott-hero__rating">
            <span className="ott-hero__rating-star">★</span>
            <span className="ott-hero__rating-value">{movie.rating}</span>
          </span>
          <span className="ott-hero__meta-dot" aria-hidden="true" />
          <span className="ott-hero__year">{movie.year}</span>
          <span className="ott-hero__meta-dot" aria-hidden="true" />
          <span className="ott-hero__runtime">{movie.runtime}</span>
          <span className="ott-hero__meta-dot" aria-hidden="true" />
          <span className="ott-hero__age-rating">{movie.ageRating}</span>
        </div>

        <div className="ott-hero__genres" aria-label="Genres">
          {movie.genres.map((g) => (
            <span key={g} className="ott-hero__genre-tag">
              {g}
            </span>
          ))}
        </div>

        <p className="ott-hero__description">{movie.description}</p>

        <div className="ott-hero__actions">
          <button
            className="ott-btn ott-btn--primary"
            onClick={() => onWatchNow && onWatchNow(movie.title)}
            aria-label={`Watch ${movie.title} now`}
          >
            <span className="ott-btn__icon">▶</span>
            Watch Now
          </button>
          <button
            className="ott-btn ott-btn--secondary"
            onClick={() => setInMyList((v) => !v)}
            aria-label={inMyList ? "Remove from My List" : "Add to My List"}
            style={
              inMyList
                ? {
                    background: "rgba(46, 204, 113, 0.2)",
                    borderColor: "#2ECC71",
                  }
                : {}
            }
          >
            <span className="ott-btn__icon">{inMyList ? "✓" : "+"}</span>
            My List
          </button>
          <button
            className="ott-btn ott-btn--secondary ott-btn--icon-only"
            aria-label="More information"
          >
            <span>ℹ</span>
          </button>
        </div>
      </div>

      {/* Dot Navigation */}
      <div
        aria-label="Featured content navigation"
        style={{
          position: "absolute",
          bottom: "48px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 4,
        }}
      >
        {HERO_MOVIES.map((_, i) => (
          <button
            key={i}
            className={`ott-hero__dot${i === currentIndex ? " active" : ""}`}
            aria-label={`Featured item ${i + 1}`}
            onClick={() => goToSlide(i)}
            style={{
              width: i === currentIndex ? "24px" : "8px",
              height: "6px",
              borderRadius: "3px",
              background:
                i === currentIndex
                  ? "var(--color-accent-primary)"
                  : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </section>
  );
}
