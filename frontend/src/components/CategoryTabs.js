import React from "react";

/**
 * OTT App Category / Genre Tabs Component
 */
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "action", label: "Action" },
  { id: "comedy", label: "Comedy" },
  { id: "drama", label: "Drama" },
  { id: "sci-fi", label: "Sci-Fi" },
  { id: "horror", label: "Horror" },
  { id: "romance", label: "Romance" },
  { id: "thriller", label: "Thriller" },
  { id: "animation", label: "Animation" },
  { id: "documentary", label: "Documentary" },
];

export default function CategoryTabs({ activeCategory, onCategoryChange }) {
  return (
    <div
      className="ott-categories"
      role="tablist"
      aria-label="Content categories"
    >
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          className={`ott-category-tab${activeCategory === cat.id ? " active" : ""}`}
          role="tab"
          aria-selected={activeCategory === cat.id}
          data-category={cat.id}
          onClick={() => onCategoryChange && onCategoryChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
