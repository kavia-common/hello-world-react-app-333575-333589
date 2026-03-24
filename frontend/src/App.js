import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BlogPostCard from './components/BlogPostCard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

/* ─────────────────────────────────────────────────────────────
   Blog post data
   ───────────────────────────────────────────────────────────── */
import heroImg from './assets/figma/blog-hero-1__1-86.png';
import card2Img from './assets/figma/blog-card-2__1-108.png';
import card3Img from './assets/figma/blog-card-3__1-123.png';
import featuredImg from './assets/figma/blog-featured__1-141-464667.png';
import all1Img from './assets/figma/blog-all-1__1-165.png';
import all2Img from './assets/figma/blog-all-2__1-186.png';
import all3Img from './assets/figma/blog-all-3__1-207.png';
import all4Img from './assets/figma/blog-all-4__1-229.png';
import all5Img from './assets/figma/blog-all-5__1-250.png';
import all6Img from './assets/figma/blog-all-6__1-271.png';

/** Recent blog posts – the top section with one large card + two smaller cards */
const RECENT_POSTS = {
  featured: {
    id: 'recent-featured',
    image: heroImg,
    imageAlt: 'Person presenting a UX review to colleagues',
    author: 'Olivia Rhye • 1 Jan 2023',
    heading: 'UX review presentations',
    excerpt:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    badges: [
      { label: 'Design', colorScheme: 'purple' },
      { label: 'Research', colorScheme: 'indigo' },
      { label: 'Presentation', colorScheme: 'pink' },
    ],
  },
  side: [
    {
      id: 'recent-side-1',
      image: card2Img,
      imageAlt: 'Developer working on Linear project management tool',
      author: 'Phoenix Baker • 1 Jan 2023',
      heading: 'Migrating to Linear 101',
      excerpt:
        'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get...',
      badges: [
        { label: 'Design', colorScheme: 'blue' },
        { label: 'Research', colorScheme: 'pink' },
      ],
    },
    {
      id: 'recent-side-2',
      image: card3Img,
      imageAlt: 'API documentation and stack',
      author: 'Lana Steiner • 1 Jan 2023',
      heading: 'Building your API Stack',
      excerpt:
        'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
      badges: [
        { label: 'Design', colorScheme: 'green' },
        { label: 'Research', colorScheme: 'pink' },
      ],
    },
  ],
};

/** Featured (second section) – one wide card */
const FEATURED_POST = {
  id: 'featured-main',
  image: featuredImg,
  imageAlt: 'Designer working with a grid system',
  author: 'Olivia Rhye • 1 Jan 2023',
  heading: 'Grid system for better Design User Interface',
  excerpt:
    'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
  badges: [
    { label: 'Design', colorScheme: 'purple' },
    { label: 'Interface', colorScheme: 'pink' },
  ],
};

/** All blog posts – six cards in a 3-column grid */
const ALL_POSTS = [
  {
    id: 'all-1',
    image: all1Img,
    imageAlt: 'Bill Walsh speaking on stage',
    author: 'Alec Whitten • 1 Jan 2023',
    heading: 'Bill Walsh leadership lessons',
    excerpt:
      'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    badges: [
      { label: 'Leadership', colorScheme: 'purple' },
      { label: 'Management', colorScheme: 'gray' },
    ],
  },
  {
    id: 'all-2',
    image: all2Img,
    imageAlt: 'Product manager reviewing mental models',
    author: 'Demi Wilkinson • 1 Jan 2023',
    heading: 'PM mental models',
    excerpt: 'Mental models are simple expressions of complex processes or relationships.',
    badges: [
      { label: 'Product', colorScheme: 'blue' },
      { label: 'Research', colorScheme: 'indigo' },
      { label: 'Frameworks', colorScheme: 'orange' },
    ],
  },
  {
    id: 'all-3',
    image: all3Img,
    imageAlt: 'Wireframing sketches on paper',
    author: 'Candice Wu • 1 Jan 2023',
    heading: 'What is Wireframing?',
    excerpt:
      'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    badges: [
      { label: 'Design', colorScheme: 'purple' },
      { label: 'Research', colorScheme: 'indigo' },
    ],
  },
  {
    id: 'all-4',
    image: all4Img,
    imageAlt: 'Team collaborating on design',
    author: 'Natali Craig • 1 Jan 2023',
    heading: 'How collaboration makes us better designers',
    excerpt:
      'Collaboration can make our teams stronger, and our individual designs better.',
    badges: [
      { label: 'Design', colorScheme: 'purple' },
      { label: 'Research', colorScheme: 'indigo' },
    ],
  },
  {
    id: 'all-5',
    image: all5Img,
    imageAlt: 'JavaScript frameworks overview',
    author: 'Drew Cano • 1 Jan 2023',
    heading: 'Our top 10 Javascript frameworks to use',
    excerpt:
      'JavaScript frameworks make development easy with extensive features and functionalities.',
    badges: [
      { label: 'Software Development', colorScheme: 'green' },
      { label: 'Tools', colorScheme: 'pink' },
      { label: 'SaaS', colorScheme: 'rose' },
    ],
  },
  {
    id: 'all-6',
    image: all6Img,
    imageAlt: 'Podcast recording setup',
    author: 'Orlando Diggs • 1 Jan 2023',
    heading: "Podcast: Creating a better CX Community",
    excerpt:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    badges: [
      { label: 'Podcasts', colorScheme: 'purple' },
      { label: 'Customer Success', colorScheme: 'gray' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   App
   ───────────────────────────────────────────────────────────── */

// PUBLIC_INTERFACE
function App() {
  /**
   * Root application component.
   * Renders the full "THE BLOG" page: Navbar, hero header, blog sections, and footer.
   */
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app${darkMode ? ' app--dark' : ''}`} id="home">
      {/* Skip to main content – accessibility */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      {/* Navigation */}
      <header className="site-header">
        <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((d) => !d)} />

        {/* Hero / THE BLOG banner */}
        <div className="blog-hero">
          <div className="blog-hero__inner">
            <h1 className="blog-hero__title">THE BLOG</h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content" tabIndex="-1" className="site-main">
        {/* ── Section 1: Recent blog posts ── */}
        <section className="blog-section" aria-labelledby="recent-heading">
          <div className="blog-section__container">
            <h2 id="recent-heading" className="section-heading">
              Recent blog posts
            </h2>
            <div className="recent-posts">
              {/* Large featured card (left) */}
              <div className="recent-posts__main">
                <BlogPostCard
                  variant="featured"
                  {...RECENT_POSTS.featured}
                />
              </div>
              {/* Two smaller side cards (right column) */}
              <div className="recent-posts__side">
                {RECENT_POSTS.side.map((post) => (
                  <BlogPostCard key={post.id} variant="side" {...post} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Featured post (wide) ── */}
        <section className="blog-section" aria-labelledby="featured-heading-sr">
          <div className="blog-section__container">
            <h2 id="featured-heading-sr" className="sr-only">
              Featured post
            </h2>
            <div className="featured-post">
              <BlogPostCard variant="featured-wide" {...FEATURED_POST} />
            </div>
          </div>
        </section>

        {/* ── Section 3: All blog posts ── */}
        <section className="blog-section" aria-labelledby="all-heading">
          <div className="blog-section__container blog-section__container--wide">
            <div className="all-posts">
              <h2 id="all-heading" className="section-heading">
                All blog posts
              </h2>
              <div className="all-posts__grid">
                {ALL_POSTS.map((post) => (
                  <BlogPostCard key={post.id} variant="grid" {...post} />
                ))}
              </div>
              <Pagination totalPages={10} initialPage={1} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
