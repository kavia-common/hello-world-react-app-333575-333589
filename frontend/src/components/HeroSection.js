import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from '../context/ToastContext';
import { useDetail } from '../context/DetailContext';
import { heroSlides } from '../data/content';
import { PlayIcon, PlusIcon, MoreIcon } from './Icons';

/**
 * HeroSection - Full-width hero carousel showcasing featured content.
 * Auto-advances every 5 seconds.
 */

// PUBLIC_INTERFACE
function HeroSection() {
  /** Renders the hero carousel with slides, navigation dots, and content overlays. */
  const [activeSlide, setActiveSlide] = useState(0);
  const { showToast } = useToast();
  const { showDetail } = useDetail();

  const goToSlide = useCallback((index) => { setActiveSlide(index); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="hero" aria-label="Featured content">
      <div
        className="hero__slider"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        aria-live="polite"
      >
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`hero__slide ${s.colorClass}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${heroSlides.length}: ${s.title}`}
            aria-hidden={i !== activeSlide}
          >
            <HeroSlideBg slideIndex={i} />
            <div className="hero__bg-gradient" aria-hidden="true" />
            {i === activeSlide && (
              <div className="hero__content">
                <div className="hero__badge-row">
                  {s.badges.map((badge, bi) => (
                    <span key={bi} className={`hero__badge hero__badge--${badge.type}`}>{badge.label}</span>
                  ))}
                </div>
                <h2 className="hero__title">{s.title}</h2>
                <div className="hero__meta">
                  <span className="hero__meta-item hero__meta-rating">⭐ {s.rating}</span>
                  <span className="hero__meta-dot" aria-hidden="true" />
                  <span className="hero__meta-item">{s.year}</span>
                  <span className="hero__meta-dot" aria-hidden="true" />
                  <span className="hero__meta-item">{s.duration}</span>
                </div>
                <div className="hero__genres">
                  {s.genres.map((g) => <span key={g} className="hero__genre-tag">{g}</span>)}
                </div>
                <p className="hero__desc">{s.desc}</p>
                <div className="hero__actions">
                  <button className="hero__play-btn" onClick={() => showToast(`Playing ${s.title}…`)} aria-label={`Play ${s.title}`}>
                    <PlayIcon color="#fff" />
                    Play
                  </button>
                  <button className="hero__list-btn" onClick={() => showToast('Added to My List')} aria-label={`Add ${s.title} to My List`}>
                    <PlusIcon />
                    My List
                  </button>
                  <button
                    className="hero__more-btn"
                    onClick={() => showDetail(s.title, `${s.year} · ${s.genres.join(' · ')} · ${s.duration}`, s.desc, s.colorForDetail, s.rating)}
                    aria-label={`More info about ${s.title}`}
                  >
                    <MoreIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hero__dots" role="tablist" aria-label="Hero slides">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            className={`hero__dot${i === activeSlide ? ' active' : ''}`}
            onClick={() => goToSlide(i)}
            role="tab"
            aria-selected={i === activeSlide}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * HeroSlideBg - Decorative SVG background for each hero slide.
 */
function HeroSlideBg({ slideIndex }) {
  if (slideIndex === 0) {
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 480 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0f0c29' }} />
              <stop offset="50%" style={{ stopColor: '#302b63' }} />
              <stop offset="100%" style={{ stopColor: '#24243e' }} />
            </linearGradient>
          </defs>
          <rect width="480" height="480" fill="url(#hg1)" />
          <ellipse cx="320" cy="180" rx="120" ry="160" fill="rgba(108,99,255,0.3)" opacity="0.5" />
          <circle cx="320" cy="110" r="45" fill="rgba(108,99,255,0.2)" />
          <circle cx="80" cy="60" r="2" fill="rgba(255,255,255,0.6)" />
          <circle cx="150" cy="40" r="1.5" fill="rgba(255,255,255,0.4)" />
          <circle cx="400" cy="50" r="2" fill="rgba(255,255,255,0.3)" />
        </svg>
      </div>
    );
  }
  if (slideIndex === 1) {
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 480 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="hg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1a0533' }} />
              <stop offset="50%" style={{ stopColor: '#330867' }} />
              <stop offset="100%" style={{ stopColor: '#1a1a2e' }} />
            </linearGradient>
          </defs>
          <rect width="480" height="480" fill="url(#hg2)" />
          <ellipse cx="300" cy="200" rx="140" ry="180" fill="rgba(229,9,20,0.15)" opacity="0.8" />
          <circle cx="300" cy="120" r="60" fill="rgba(229,9,20,0.15)" />
          <circle cx="80" cy="70" r="2" fill="rgba(255,255,255,0.5)" />
          <circle cx="420" cy="80" r="1.5" fill="rgba(255,255,255,0.5)" />
        </svg>
      </div>
    );
  }
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <svg width="100%" height="100%" viewBox="0 0 480 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="hg3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0d0d0d' }} />
            <stop offset="50%" style={{ stopColor: '#1c1c3a' }} />
            <stop offset="100%" style={{ stopColor: '#0d2137' }} />
          </linearGradient>
        </defs>
        <rect width="480" height="480" fill="url(#hg3)" />
        <rect x="0" y="300" width="30" height="180" fill="rgba(255,255,255,0.05)" />
        <rect x="40" y="250" width="25" height="230" fill="rgba(255,255,255,0.07)" />
        <rect x="125" y="240" width="30" height="240" fill="rgba(255,255,255,0.08)" />
        <rect x="230" y="220" width="35" height="260" fill="rgba(255,255,255,0.06)" />
        <rect x="340" y="200" width="30" height="280" fill="rgba(255,255,255,0.07)" />
        <ellipse cx="240" cy="200" rx="200" ry="80" fill="rgba(108,99,255,0.08)" />
        <circle cx="80" cy="60" r="2" fill="rgba(108,99,255,0.9)" />
        <circle cx="350" cy="70" r="2" fill="rgba(108,99,255,0.7)" />
      </svg>
    </div>
  );
}

export default HeroSection;
