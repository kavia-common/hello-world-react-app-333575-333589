import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { searchCategories } from '../data/content';
import { SearchIcon } from '../components/Icons';

/**
 * SearchScreen - Search screen with search bar and category grid.
 */

// PUBLIC_INTERFACE
function SearchScreen() {
  /** Renders the search screen with input and browsable categories grid. */
  const [query, setQuery] = useState('');
  const { showToast } = useToast();

  return (
    <div id="screen-search" className="page search-screen" role="main">
      <h1 className="visually-hidden">Search</h1>
      <div className="search-bar-wrap">
        <div className="search-bar" role="search">
          <SearchIcon size={18} style={{ color: 'var(--color-text-tertiary)', flexShrink: 0 }} />
          <input
            type="search"
            placeholder="Movies, shows, genres…"
            aria-label="Search movies and shows"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="search-categories-grid">
        <h2 className="search-categories-title">Browse Categories</h2>
        <div className="search-grid" role="list">
          {searchCategories.map((cat) => (
            <button
              key={cat.id}
              className={`search-category-card ${cat.colorClass}`}
              onClick={() => showToast(`${cat.label} movies & shows`)}
              role="listitem"
              aria-label={cat.label}
            >
              <span className="search-category-card__label" style={cat.darkLabel ? { color: '#000' } : undefined}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchScreen;
