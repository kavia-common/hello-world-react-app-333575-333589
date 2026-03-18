import React, { useState } from 'react';

/**
 * CategoryNav - Horizontal scrollable category pill navigation.
 */

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'movies', label: 'Movies' },
  { id: 'tvshows', label: 'TV Shows' },
  { id: 'sports', label: 'Sports' },
  { id: 'kids', label: 'Kids' },
  { id: 'live', label: 'Live TV' },
];

// PUBLIC_INTERFACE
function CategoryNav() {
  /** Renders scrollable category pills with active state. */
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <nav className="category-nav" aria-label="Content categories">
      <ul className="category-nav__list" role="list">
        {CATEGORIES.map((cat) => (
          <li key={cat.id} className="category-nav__item">
            <button
              className={`category-nav__btn${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryNav;
