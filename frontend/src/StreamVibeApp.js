import React, { useState } from 'react';
import './StreamVibeApp.css';

// ── Asset imports ──────────────────────────────────────────────────────────────
import logoSvg from './assets/figma/community-files/logo.svg';
import navbarIconsSvg from './assets/figma/community-files/navbar_icons.svg';
import heroBg from './assets/figma/community-files/hero_bg.png';
import playIconSvg from './assets/figma/community-files/play_icon.svg';
import heroActionIconsSvg from './assets/figma/community-files/hero_action_icons.svg';
import episode01Thumb from './assets/figma/community-files/episode01_thumb-106d37.png';
import ep1TimeIcon from './assets/figma/community-files/episode01_time_icon.svg';
import ep2TimeIcon from './assets/figma/community-files/episode02_time_icon.svg';
import ep3TimeIcon from './assets/figma/community-files/episode03_time_icon.svg';
import ep4TimeIcon from './assets/figma/community-files/episode04_time_icon.svg';
import ep5TimeIcon from './assets/figma/community-files/episode05_time_icon.svg';
import castNavIconsSvg from './assets/figma/community-files/cast_nav_icons.svg';
import reviewNavIconsSvg from './assets/figma/community-files/review_nav_icons.svg';
import cast01 from './assets/figma/community-files/cast_01.png';
import cast02 from './assets/figma/community-files/cast_02.png';
import cast03 from './assets/figma/community-files/cast_03.png';
import cast04 from './assets/figma/community-files/cast_04.png';
import cast05 from './assets/figma/community-files/cast_05.png';
import cast06 from './assets/figma/community-files/cast_06.png';
import cast07 from './assets/figma/community-files/cast_07.png';
import cast08 from './assets/figma/community-files/cast_08.png';
import releasedYearIconSvg from './assets/figma/community-files/released_year_icon.svg';
import languagesIconSvg from './assets/figma/community-files/languages_icon.svg';
import ratingsIconSvg from './assets/figma/community-files/ratings_icon.svg';
import genresIconSvg from './assets/figma/community-files/genres_icon.svg';
import imdbStarsSvg from './assets/figma/community-files/imdb_stars.svg';
import streamvibeStarsSvg from './assets/figma/community-files/streamvibe_stars.svg';
import directorImg from './assets/figma/community-files/director.png';
import musicImg from './assets/figma/community-files/music.png';
import footerSocialIconsSvg from './assets/figma/community-files/footer_social_icons.svg';
import season01Toggle from './assets/figma/community-files/season01_toggle.svg';
import season02Toggle from './assets/figma/community-files/season02_toggle.svg';
import addReviewIcon from './assets/figma/community-files/add_review_icon.svg';
import musicIconSvg from './assets/figma/community-files/music_icon.svg';
import directorIconSvg from './assets/figma/community-files/director_icon.svg';

// ── Background images for the scrolling mosaic ────────────────────────────────
import bg01 from './assets/figma/community-files/bg_01.png';
import bg02 from './assets/figma/community-files/bg_02.png';
import bg03 from './assets/figma/community-files/bg_03.png';
import bg04 from './assets/figma/community-files/bg_04.png';
import bg05 from './assets/figma/community-files/bg_05.png';
import bg06 from './assets/figma/community-files/bg_06.png';
import bg07 from './assets/figma/community-files/bg_07.png';
import bg08 from './assets/figma/community-files/bg_08.png';
import bg09 from './assets/figma/community-files/bg_09.png';

// ── Season episode data ───────────────────────────────────────────────────────
const SEASON2_EPISODES = [
  {
    id: 1,
    title: 'Chapter One : The Vanishing of Will Byers',
    duration: '49 min',
    description:
      'On his way from a friend\u2019s house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.',
    thumb: episode01Thumb,
    timeIcon: ep1TimeIcon,
  },
  {
    id: 2,
    title: 'Chapter Two: The Weirdo on Maple Street',
    duration: '56 min',
    description:
      'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
    thumb: null,
    timeIcon: ep2TimeIcon,
  },
  {
    id: 3,
    title: 'Chapter Three: Holly, Jolly',
    duration: '52 min',
    description:
      "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her.",
    thumb: null,
    timeIcon: ep3TimeIcon,
  },
  {
    id: 4,
    title: 'Chapter Four: The Body',
    duration: '51 min',
    description:
      'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover..',
    thumb: null,
    timeIcon: ep4TimeIcon,
  },
  {
    id: 5,
    title: 'Chapter Five: The Flea and the Acrobat',
    duration: '53 min',
    description:
      'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.',
    thumb: null,
    timeIcon: ep5TimeIcon,
  },
];

const CAST_IMAGES = [cast01, cast02, cast03, cast04, cast05, cast06, cast07, cast08];

const BG_IMAGES = [bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08, bg09];

// ── Navbar Component ──────────────────────────────────────────────────────────

/**
 * StreamVibe Navbar with logo, nav links and action icons.
 * PUBLIC_INTERFACE
 */
function SVNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sv-navbar" aria-label="Main navigation">
      <div className="sv-navbar__inner">
        {/* Logo */}
        <a href="#home" className="sv-navbar__logo" aria-label="StreamVibe home">
          <img src={logoSvg} alt="StreamVibe" width="166" height="50" />
        </a>

        {/* Center nav pill */}
        <div className="sv-navbar__pill" role="navigation" aria-label="Main menu">
          <a href="#home" className="sv-navbar__pill-link">Home</a>
          <a href="#movies" className="sv-navbar__pill-link sv-navbar__pill-link--active" aria-current="page">
            Movies &amp; Shows
          </a>
          <a href="#support" className="sv-navbar__pill-link">Support</a>
          <a href="#subscriptions" className="sv-navbar__pill-link">Subscriptions</a>
        </div>

        {/* Right action icons: search + bell */}
        <div className="sv-navbar__actions">
          <img src={navbarIconsSvg} alt="Search and notifications" width="62" height="24" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="sv-navbar__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sv-hamburger-bar" />
          <span className="sv-hamburger-bar" />
          <span className="sv-hamburger-bar" />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="sv-navbar__mobile-menu" role="menu">
          {['Home', 'Movies & Shows', 'Support', 'Subscriptions'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/[^a-z]/g, '')}`}
              className="sv-navbar__mobile-link"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────

/**
 * Hero section displaying the show title and action buttons overlaid on the hero image.
 * PUBLIC_INTERFACE
 */
function SVHero() {
  return (
    <section
      className="sv-hero"
      style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 100%), url(${heroBg})` }}
      aria-label="Featured show: Stranger Things"
    >
      <div className="sv-hero__content">
        <div className="sv-hero__text">
          <h1 className="sv-hero__title">Stranger Things</h1>
          <p className="sv-hero__desc">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
            terrifying supernatural forces and one strange little girl.
          </p>
        </div>
        <div className="sv-hero__actions">
          <button className="sv-btn sv-btn--red sv-btn--play" aria-label="Play Stranger Things now">
            <img src={playIconSvg} alt="" aria-hidden="true" width="24" height="24" />
            <span>Play Now</span>
          </button>
          <img
            src={heroActionIconsSvg}
            alt="Add to list, like and volume controls"
            width="160"
            height="48"
          />
        </div>
      </div>
    </section>
  );
}

// ── Seasons & Episodes ────────────────────────────────────────────────────────

/**
 * Accordion-style season selector with episode list.
 * PUBLIC_INTERFACE
 */
function SVSeasonsEpisodes() {
  const [activeSeason, setActiveSeason] = useState(2);

  const seasons = [
    { id: 1, label: 'Season 01', episodes: 9 },
    { id: 2, label: 'Season 02', episodes: 5, expanded: true },
    { id: 3, label: 'Season 03', episodes: 7 },
  ];

  return (
    <section className="sv-seasons" aria-label="Seasons and Episodes">
      <div className="sv-card sv-seasons__card">
        <h2 className="sv-seasons__heading">Seasons and Episodes</h2>
        <div className="sv-seasons__list">
          {seasons.map((season) => (
            <div key={season.id} className="sv-seasons__season">
              {/* Season header row */}
              <button
                className={`sv-seasons__season-header${activeSeason === season.id ? ' sv-seasons__season-header--active' : ''}`}
                aria-expanded={activeSeason === season.id}
                onClick={() => setActiveSeason(activeSeason === season.id ? null : season.id)}
              >
                <div className="sv-seasons__season-info">
                  <span className="sv-seasons__season-name">{season.label}</span>
                  <span className="sv-seasons__season-count">{season.episodes} Episodes</span>
                </div>
                <img
                  src={activeSeason === season.id ? season02Toggle : season01Toggle}
                  alt={activeSeason === season.id ? 'Collapse' : 'Expand'}
                  width="24"
                  height="24"
                />
              </button>

              {/* Episode list – only shown for active season */}
              {activeSeason === season.id && (
                <div className="sv-episodes">
                  {SEASON2_EPISODES.map((ep, idx) => (
                    <div
                      key={ep.id}
                      className={`sv-episode${idx < SEASON2_EPISODES.length - 1 ? ' sv-episode--border' : ''}`}
                    >
                      <span className="sv-episode__number" aria-hidden="true">
                        {String(ep.id).padStart(2, '0')}
                      </span>

                      {/* Thumbnail with play overlay */}
                      <div className="sv-episode__thumb">
                        {ep.thumb ? (
                          <img src={ep.thumb} alt={`Episode ${ep.id} thumbnail`} />
                        ) : (
                          <div className="sv-episode__thumb-placeholder" aria-hidden="true" />
                        )}
                        <div className="sv-episode__play-overlay" aria-hidden="true">
                          <img src={playIconSvg} alt="" width="20" height="20" />
                        </div>
                      </div>

                      {/* Episode info */}
                      <div className="sv-episode__info">
                        <div className="sv-episode__title-row">
                          <span className="sv-episode__title">{ep.title}</span>
                          <span className="sv-episode__duration">
                            <img src={ep.timeIcon} alt="" aria-hidden="true" width="20" height="20" />
                            <span>{ep.duration}</span>
                          </span>
                        </div>
                        <p className="sv-episode__desc">{ep.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Description ───────────────────────────────────────────────────────────────

/**
 * Show description panel.
 * PUBLIC_INTERFACE
 */
function SVDescription() {
  return (
    <section className="sv-card sv-description" aria-label="Description">
      <h2 className="sv-section-label">Description</h2>
      <p className="sv-description__text">
        When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
        terrifying supernatural forces and one strange little girl.
      </p>
    </section>
  );
}

// ── Cast ──────────────────────────────────────────────────────────────────────

/**
 * Cast photos panel with navigation.
 * PUBLIC_INTERFACE
 */
function SVCast() {
  const [startIdx, setStartIdx] = useState(0);
  const visible = 5;
  const canPrev = startIdx > 0;
  const canNext = startIdx + visible < CAST_IMAGES.length;

  return (
    <section className="sv-card sv-cast" aria-label="Cast">
      <div className="sv-cast__header">
        <h2 className="sv-section-label sv-cast__heading">Cast</h2>
        <img
          src={castNavIconsSvg}
          alt="Navigate cast"
          width="96"
          height="44"
          className="sv-cast__nav"
          aria-hidden="true"
        />
        <div className="sv-cast__nav-btns">
          <button
            className="sv-icon-btn"
            aria-label="Previous cast members"
            disabled={!canPrev}
            onClick={() => setStartIdx((i) => Math.max(0, i - 1))}
          >
            ‹
          </button>
          <button
            className="sv-icon-btn"
            aria-label="Next cast members"
            disabled={!canNext}
            onClick={() => setStartIdx((i) => Math.min(CAST_IMAGES.length - visible, i + 1))}
          >
            ›
          </button>
        </div>
      </div>
      <div className="sv-cast__photos">
        {CAST_IMAGES.slice(startIdx, startIdx + visible).map((src, i) => (
          <div key={startIdx + i} className="sv-cast__photo">
            <img src={src} alt={`Cast member ${startIdx + i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Reviews ───────────────────────────────────────────────────────────────────

/**
 * User reviews panel.
 * PUBLIC_INTERFACE
 */
function SVReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Aniket Roy',
      location: 'From India',
      rating: '4.5',
      starsSvg: imdbStarsSvg,
      text: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn\u2019t watch it.",
    },
    {
      id: 2,
      name: 'Swaraj',
      location: 'From India',
      rating: '5',
      starsSvg: streamvibeStarsSvg,
      text: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.',
    },
  ];

  return (
    <section className="sv-card sv-reviews" aria-label="Reviews">
      <div className="sv-reviews__header">
        <h2 className="sv-section-label sv-reviews__heading">Reviews</h2>
        <button className="sv-btn sv-btn--ghost sv-btn--small" aria-label="Add your review">
          <img src={addReviewIcon} alt="" aria-hidden="true" width="24" height="24" />
          <span>Add Your Review</span>
        </button>
      </div>

      <div className="sv-reviews__cards">
        {reviews.map((r) => (
          <article key={r.id} className="sv-review-card">
            <div className="sv-review-card__header">
              <div className="sv-review-card__author">
                <p className="sv-review-card__name">{r.name}</p>
                <p className="sv-review-card__location">{r.location}</p>
              </div>
              <div className="sv-review-card__rating">
                <img src={r.starsSvg} alt={`${r.rating} stars`} height="18" />
                <span className="sv-review-card__score">{r.rating}</span>
              </div>
            </div>
            <p className="sv-review-card__text">{r.text}</p>
          </article>
        ))}
      </div>

      <div className="sv-reviews__pagination" aria-label="Reviews navigation">
        <img src={reviewNavIconsSvg} alt="Navigate reviews" width="96" height="44" />
      </div>
    </section>
  );
}

// ── Show Details Sidebar ──────────────────────────────────────────────────────

/**
 * Show details panel (right sidebar): released year, languages, ratings, genres, director, music.
 * PUBLIC_INTERFACE
 */
function SVShowDetails() {
  const languages = ['English', 'Hindi', 'Tamil', 'Telegu', 'Kannada'];
  const genres = ['Sci-Fi TV', 'Teen TV Shows', 'US TV Shows'];

  return (
    <aside className="sv-card sv-show-details" aria-label="Show details">
      {/* Released Year */}
      <div className="sv-detail-row">
        <div className="sv-detail-row__label">
          <img src={releasedYearIconSvg} alt="" aria-hidden="true" width="20" height="20" />
          <span>Released Year</span>
        </div>
        <p className="sv-detail-row__value">2022</p>
      </div>

      {/* Available Languages */}
      <div className="sv-detail-row">
        <div className="sv-detail-row__label">
          <img src={languagesIconSvg} alt="" aria-hidden="true" width="20" height="20" />
          <span>Available Languages</span>
        </div>
        <div className="sv-detail-row__tags" aria-label="Available languages">
          {languages.map((lang) => (
            <span key={lang} className="sv-tag">{lang}</span>
          ))}
        </div>
      </div>

      {/* Ratings */}
      <div className="sv-detail-row">
        <div className="sv-detail-row__label">
          <img src={ratingsIconSvg} alt="" aria-hidden="true" width="20" height="20" />
          <span>Ratings</span>
        </div>
        <div className="sv-ratings-cards">
          <div className="sv-ratings-card">
            <span className="sv-ratings-card__name">IMDb</span>
            <div className="sv-ratings-card__stars">
              <img src={imdbStarsSvg} alt="4.5 out of 5 stars" height="14" />
              <span>4.5</span>
            </div>
          </div>
          <div className="sv-ratings-card">
            <span className="sv-ratings-card__name">Streamvibe</span>
            <div className="sv-ratings-card__stars">
              <img src={streamvibeStarsSvg} alt="4 out of 5 stars" height="14" />
              <span>4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Genres */}
      <div className="sv-detail-row">
        <div className="sv-detail-row__label">
          <img src={genresIconSvg} alt="" aria-hidden="true" width="20" height="20" />
          <span>Gernes</span>
        </div>
        <div className="sv-detail-row__tags" aria-label="Genres">
          {genres.map((g) => (
            <span key={g} className="sv-tag">{g}</span>
          ))}
        </div>
      </div>

      {/* Director */}
      <div className="sv-detail-row">
        <div className="sv-detail-row__label">
          <span>Director</span>
        </div>
        <div className="sv-person-card">
          <img src={directorImg} alt="The Duffer Brothers" className="sv-person-card__img" />
          <div className="sv-person-card__info">
            <p className="sv-person-card__name">The Duffer Brothers</p>
            <p className="sv-person-card__sub">From USA</p>
          </div>
        </div>
      </div>

      {/* Music */}
      <div className="sv-detail-row">
        <div className="sv-detail-row__label">
          <span>Music</span>
        </div>
        <div className="sv-person-card">
          <img src={musicImg} alt="Kyle Dixon" className="sv-person-card__img" />
          <div className="sv-person-card__info">
            <p className="sv-person-card__name">Kyle Dixon</p>
            <p className="sv-person-card__sub">From USA</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────

/**
 * "Start your free trial today" CTA section with mosaic background.
 * PUBLIC_INTERFACE
 */
function SVCtaBanner() {
  return (
    <section className="sv-cta" aria-label="Free trial call to action">
      {/* Scrolling mosaic background */}
      <div className="sv-cta__bg" aria-hidden="true">
        <div className="sv-cta__grid">
          {BG_IMAGES.map((src, i) => (
            <div key={i} className="sv-cta__grid-cell">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
        {/* Left fade gradient */}
        <div className="sv-cta__fade-left" />
      </div>

      <div className="sv-cta__content">
        <h2 className="sv-cta__heading">Start your free trial today!</h2>
        <p className="sv-cta__subtext">
          This is a clear and concise call to action that encourages users to sign up for a free trial
          of StreamVibe.
        </p>
        <button className="sv-btn sv-btn--red sv-cta__btn">
          Start a Free Trial
        </button>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

/**
 * Site footer with link columns and social icons.
 * PUBLIC_INTERFACE
 */
function SVFooter() {
  const columns = [
    {
      heading: 'Home',
      links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
    },
    {
      heading: 'Movies',
      links: ['Gernes', 'Trending', 'New Release', 'Popular'],
    },
    {
      heading: 'Shows',
      links: ['Gernes', 'Trending', 'New Release', 'Popular'],
    },
    {
      heading: 'Support',
      links: ['Contact Us'],
    },
    {
      heading: 'Subscription',
      links: ['Plans', 'Features'],
    },
  ];

  return (
    <footer className="sv-footer" aria-label="Site footer">
      <div className="sv-footer__inner">
        {/* Link columns */}
        <div className="sv-footer__columns">
          {columns.map((col) => (
            <div key={col.heading} className="sv-footer__col">
              <h3 className="sv-footer__col-heading">{col.heading}</h3>
              <nav aria-label={`${col.heading} links`}>
                <ul className="sv-footer__col-links">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="sv-footer__link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}

          {/* Connect with us */}
          <div className="sv-footer__col">
            <h3 className="sv-footer__col-heading">Connect With Us</h3>
            <img
              src={footerSocialIconsSvg}
              alt="Facebook, Twitter and LinkedIn"
              width="152"
              height="44"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="sv-footer__bottom">
          <div className="sv-footer__divider" />
          <div className="sv-footer__bottom-inner">
            <p className="sv-footer__copy">@2023 streamvib, All Rights Reserved</p>
            <div className="sv-footer__legal">
              <a href="#terms" className="sv-footer__legal-link">Terms of Use</a>
              <div className="sv-footer__legal-divider" />
              <a href="#privacy" className="sv-footer__legal-link">Privacy Policy</a>
              <div className="sv-footer__legal-divider" />
              <a href="#cookies" className="sv-footer__legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────

/**
 * StreamVibe Shows Page – root component.
 * Composes all sections into the full "Shows Page Open – Laptop" layout.
 * PUBLIC_INTERFACE
 */
function StreamVibeApp() {
  return (
    <div className="sv-app" id="home">
      {/* Skip to main content – a11y */}
      <a className="sv-skip-link" href="#sv-main">Skip to main content</a>

      {/* Navigation */}
      <SVNavbar />

      <main id="sv-main" tabIndex="-1" className="sv-main">
        {/* Hero */}
        <SVHero />

        {/* Main content area: left panel + right sidebar */}
        <div className="sv-content-grid">
          {/* Left: Seasons/Episodes + Description + Cast + Reviews */}
          <div className="sv-content-left">
            <SVSeasonsEpisodes />
            <SVDescription />
            <SVCast />
            <SVReviews />
          </div>

          {/* Right: Show details */}
          <SVShowDetails />
        </div>

        {/* CTA Banner */}
        <SVCtaBanner />
      </main>

      {/* Footer */}
      <SVFooter />
    </div>
  );
}

export default StreamVibeApp;
