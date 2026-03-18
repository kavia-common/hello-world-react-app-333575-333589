import React, { useState } from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import CategoryTabs from "./CategoryTabs";
import ContentRow from "./ContentRow";
import VideoModal from "./VideoModal";
import Footer from "./Footer";

/**
 * OTT App - Main Page Component
 * Figma: XUXo80WmsomKgEyA6MWE8m / node-id: 0-539
 * Full streaming platform home screen
 */

// ---- Data ----
const CONTINUE_WATCHING = [
  {
    title: "Neon Requiem",
    episode: "S1 E4 • 35 min left",
    progress: 65,
    bgColor: "linear-gradient(135deg,#0F2027,#2C5364)",
    emoji: "🎷",
  },
  {
    title: "The Last Chronicle",
    episode: "Episode 2 • 1h 12m left",
    progress: 30,
    bgColor: "linear-gradient(135deg,#2D1B69,#11998E)",
    emoji: "📚",
  },
  {
    title: "Crimson Horizon",
    episode: "S2 E7 • 12 min left",
    progress: 80,
    bgColor: "linear-gradient(135deg,#8B0000,#FF6B35)",
    emoji: "🌅",
  },
  {
    title: "Ghost Protocol",
    episode: "S1 E6 • 28 min left",
    progress: 50,
    bgColor: "linear-gradient(135deg,#1a1a2e,#e94560)",
    emoji: "👻",
  },
  {
    title: "Dark Waters",
    episode: "S3 E2 • 44 min left",
    progress: 20,
    bgColor: "linear-gradient(135deg,#0f2027,#203a43)",
    emoji: "🌊",
  },
];

const TRENDING = [
  {
    title: "Shadow of Eternity",
    year: "2024",
    runtime: "2h 18m",
    rating: "9.1",
    isNew: true,
    genres: ["Action", "Sci-Fi"],
    bgColor: "linear-gradient(135deg,#1A1A2E,#0F3460)",
    emoji: "🎬",
  },
  {
    title: "The Last Chronicle",
    year: "2024",
    runtime: "1h 52m",
    rating: "8.7",
    genres: ["Drama", "Mystery"],
    bgColor: "linear-gradient(135deg,#2D1B69,#11998E)",
    emoji: "📚",
  },
  {
    title: "Neon Requiem",
    year: "2024",
    runtime: "2h 5m",
    rating: "8.4",
    genres: ["Crime", "Drama"],
    bgColor: "linear-gradient(135deg,#0F2027,#2C5364)",
    emoji: "🎷",
  },
  {
    title: "Crimson Horizon",
    year: "2023",
    runtime: "1h 45m",
    rating: "8.2",
    genres: ["Action", "Thriller"],
    bgColor: "linear-gradient(135deg,#8B0000,#FF6B35)",
    emoji: "🌅",
  },
  {
    title: "Ghost Protocol",
    year: "2024",
    runtime: "1h 58m",
    rating: "7.9",
    genres: ["Horror", "Thriller"],
    bgColor: "linear-gradient(135deg,#1a1a2e,#e94560)",
    emoji: "👻",
  },
  {
    title: "Love in Transit",
    year: "2024",
    runtime: "1h 38m",
    rating: "7.6",
    genres: ["Comedy", "Romance"],
    bgColor: "linear-gradient(135deg,#fc5c7d,#6a3093)",
    emoji: "💕",
  },
  {
    title: "Pixel Odyssey",
    year: "2024",
    runtime: "1h 22m",
    rating: "8.8",
    isNew: true,
    genres: ["Animation"],
    bgColor: "linear-gradient(135deg,#11998e,#38ef7d)",
    emoji: "🎮",
  },
  {
    title: "Ocean's Secret",
    year: "2024",
    runtime: "1h 15m",
    rating: "9.3",
    genres: ["Documentary"],
    bgColor: "linear-gradient(135deg,#005C97,#363795)",
    emoji: "🌊",
  },
];

const TOP_PICKS = [
  {
    title: "Quantum Drift",
    year: "2024",
    runtime: "2h 02m",
    rating: "8.6",
    genres: ["Sci-Fi", "Thriller"],
    bgColor: "linear-gradient(135deg,#134E5E,#71B280)",
    emoji: "⚛️",
  },
  {
    title: "Iron Veil",
    year: "2024",
    runtime: "1h 49m",
    rating: "8.1",
    isNew: true,
    genres: ["Action", "Drama"],
    bgColor: "linear-gradient(135deg,#373B44,#4286f4)",
    emoji: "🛡️",
  },
  {
    title: "Autumn Letters",
    year: "2023",
    runtime: "1h 55m",
    rating: "7.8",
    genres: ["Romance", "Drama"],
    bgColor: "linear-gradient(135deg,#DA4453,#89216B)",
    emoji: "🍂",
  },
  {
    title: "The Odd Office",
    year: "2024",
    runtime: "TV Series",
    rating: "8.0",
    genres: ["Comedy"],
    bgColor: "linear-gradient(135deg,#F7971E,#FFD200)",
    emoji: "😂",
  },
  {
    title: "The Hollow",
    year: "2024",
    runtime: "1h 41m",
    rating: "7.5",
    genres: ["Horror"],
    bgColor: "linear-gradient(135deg,#141E30,#243B55)",
    emoji: "🕳️",
  },
  {
    title: "Steel Rain",
    year: "2023",
    runtime: "2h 10m",
    rating: "7.3",
    genres: ["Action", "Sci-Fi"],
    bgColor: "linear-gradient(135deg,#373B44,#aaa7a7)",
    emoji: "🌧️",
  },
  {
    title: "Dream Weavers",
    year: "2024",
    runtime: "1h 28m",
    rating: "9.0",
    isNew: true,
    genres: ["Animation"],
    bgColor: "linear-gradient(135deg,#7b4397,#dc2430)",
    emoji: "🌈",
  },
];

const NEW_RELEASES = [
  {
    title: "Starfall",
    year: "2024",
    runtime: "2h 06m",
    rating: "8.3",
    isNew: true,
    genres: ["Sci-Fi", "Action"],
    bgColor: "linear-gradient(135deg,#000428,#004e92)",
    emoji: "⭐",
  },
  {
    title: "Broken Mirror",
    year: "2024",
    runtime: "1h 44m",
    rating: "8.0",
    isNew: true,
    genres: ["Thriller", "Drama"],
    bgColor: "linear-gradient(135deg,#232526,#414345)",
    emoji: "🪞",
  },
  {
    title: "Perfect Timing",
    year: "2024",
    runtime: "1h 32m",
    rating: "7.7",
    isNew: true,
    genres: ["Comedy", "Romance"],
    bgColor: "linear-gradient(135deg,#f953c6,#b91d73)",
    emoji: "⏰",
  },
  {
    title: "Wild Earth",
    year: "2024",
    runtime: "1h 18m",
    rating: "9.2",
    isNew: true,
    genres: ["Documentary"],
    bgColor: "linear-gradient(135deg,#134E5E,#71B280)",
    emoji: "🌍",
  },
  {
    title: "The Abyss Protocol",
    year: "2024",
    runtime: "1h 57m",
    rating: "7.9",
    isNew: true,
    genres: ["Horror", "Sci-Fi"],
    bgColor: "linear-gradient(135deg,#0f0c29,#302b63)",
    emoji: "🌌",
  },
  {
    title: "Strike Force",
    year: "2024",
    runtime: "2h 14m",
    rating: "7.4",
    isNew: true,
    genres: ["Action"],
    bgColor: "linear-gradient(135deg,#c94b4b,#4b134f)",
    emoji: "💥",
  },
];

const BINGE_SERIES = [
  {
    title: "Dark Waters",
    runtime: "TV Series • S3",
    rating: "9.0",
    genres: ["Drama", "Thriller"],
    bgColor: "linear-gradient(135deg,#0f2027,#203a43)",
    emoji: "🌊",
  },
  {
    title: "Cosmos Station",
    runtime: "TV Series • S2",
    rating: "8.9",
    genres: ["Sci-Fi", "Drama"],
    bgColor: "linear-gradient(135deg,#1CB5E0,#000851)",
    emoji: "🚀",
  },
  {
    title: "The Heist Network",
    runtime: "TV Series • S1",
    rating: "8.5",
    genres: ["Crime", "Drama"],
    bgColor: "linear-gradient(135deg,#403B4A,#E7E9BB)",
    emoji: "💰",
  },
  {
    title: "Realm of Shadows",
    runtime: "TV Series • S1",
    rating: "8.7",
    isNew: true,
    genres: ["Fantasy", "Drama"],
    bgColor: "linear-gradient(135deg,#360033,#0b8793)",
    emoji: "🐉",
  },
  {
    title: "Laugh Track",
    runtime: "TV Series • S4",
    rating: "7.8",
    genres: ["Comedy"],
    bgColor: "linear-gradient(135deg,#f6d365,#fda085)",
    emoji: "🎭",
  },
  {
    title: "Vice Squad",
    runtime: "TV Series • S2",
    rating: "8.3",
    genres: ["Action", "Crime"],
    bgColor: "linear-gradient(135deg,#2c3e50,#e74c3c)",
    emoji: "🔫",
  },
];

export default function OTTPage() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalTitle, setModalTitle] = useState(null);

  const openModal = (title) => setModalTitle(title);
  const closeModal = () => setModalTitle(null);

  return (
    <div className="ott-app">
      {/* Navigation */}
      <Header activeNav={activeNav} onNavChange={setActiveNav} />

      {/* Hero Banner */}
      <HeroBanner onWatchNow={openModal} />

      {/* Main Content */}
      <main className="ott-content" id="main-content">
        {/* Category Tabs */}
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Continue Watching */}
        <ContentRow
          title="Continue Watching"
          items={CONTINUE_WATCHING}
          cardVariant="continue"
          onPlay={openModal}
        />

        {/* Trending Now */}
        <ContentRow
          title="Trending Now"
          items={TRENDING}
          cardVariant="poster"
          onPlay={openModal}
        />

        {/* StreamVault Originals Banner */}
        <div
          className="ott-featured-mini"
          role="banner"
          aria-label="StreamVault Originals promotion"
          tabIndex={0}
        >
          <div className="ott-featured-mini__bg" aria-hidden="true" />
          <div className="ott-featured-mini__content">
            <div className="ott-featured-mini__tag">⚡ StreamVault Originals</div>
            <div className="ott-featured-mini__title">
              Exclusive Content Only Here
            </div>
            <div className="ott-featured-mini__desc">
              100+ Original Series &amp; Movies — Ad-Free
            </div>
            <button
              className="ott-btn ott-btn--primary"
              style={{ padding: "10px 20px", fontSize: "14px" }}
            >
              Explore Originals →
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              right: "60px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "80px",
              opacity: 0.15,
            }}
            aria-hidden="true"
          >
            🎬
          </div>
        </div>

        {/* Top Picks */}
        <ContentRow
          title="Top Picks For You"
          items={TOP_PICKS}
          cardVariant="poster"
          onPlay={openModal}
        />

        {/* New Releases */}
        <ContentRow
          title="New Releases"
          items={NEW_RELEASES}
          cardVariant="poster"
          onPlay={openModal}
        />

        {/* Binge-Worthy Series */}
        <ContentRow
          title="Binge-Worthy Series"
          items={BINGE_SERIES}
          cardVariant="poster"
          onPlay={openModal}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Video Player Modal */}
      <VideoModal
        title={modalTitle}
        isOpen={modalTitle !== null}
        onClose={closeModal}
      />
    </div>
  );
}
