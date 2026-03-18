import React from 'react';
import CategoryNav from '../components/CategoryNav';
import HeroSection from '../components/HeroSection';
import PromoBanner from '../components/PromoBanner';
import { ContentSection } from '../components/ContentCards';
import { continueWatching, trendingContent, topPicksContent, newReleasesContent, actionMoviesContent } from '../data/content';

/**
 * HomeScreen - Main home screen with hero, categories, and content rows.
 */

// PUBLIC_INTERFACE
function HomeScreen() {
  /** Renders the complete home screen layout. */
  return (
    <main id="screen-home" className="page" role="main">
      <CategoryNav />
      <HeroSection />
      <div className="content-main">
        <ContentSection title="Continue Watching" items={continueWatching} cardType="landscape" />
        <ContentSection title="🔥 Trending Now" items={trendingContent} cardType="portrait" />
        <PromoBanner />
        <ContentSection title="Top Picks For You" items={topPicksContent} cardType="portrait" />
        <ContentSection title="New Releases" items={newReleasesContent} cardType="portrait" />
        <ContentSection title="Action Movies" items={actionMoviesContent} cardType="portrait" />
      </div>
    </main>
  );
}

export default HomeScreen;
