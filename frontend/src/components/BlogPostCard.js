import React from 'react';
import Badge from './Badge';
import IconArrowUpRight from './IconArrowUpRight';

/**
 * BlogPostCard component – renders a single blog post card.
 *
 * Supports two visual variants:
 *  - "featured": large image with full-width layout (hero)
 *  - "side": smaller horizontal card with image + text side-by-side
 *  - "grid": standard vertical card used in the "All blog posts" grid
 *
 * @param {Object} props
 * @param {string} props.variant - 'featured' | 'side' | 'grid'
 * @param {string} props.image - Image source URL
 * @param {string} props.imageAlt - Accessible alt text for the image
 * @param {string} props.author - Author name and date string
 * @param {string} props.heading - Post title
 * @param {string} [props.excerpt] - Short excerpt text
 * @param {Array}  props.badges - Array of { label, colorScheme } objects
 */
// PUBLIC_INTERFACE
function BlogPostCard({ variant = 'grid', image, imageAlt, author, heading, excerpt, badges = [] }) {
  return (
    <article className={`post-card post-card--${variant}`}>
      {/* Post image */}
      <div className="post-card__image-wrap">
        <img
          src={image}
          alt={imageAlt || heading}
          className="post-card__image"
          loading="lazy"
        />
      </div>

      {/* Post content */}
      <div className="post-card__content">
        <div className="post-card__meta-wrap">
          {/* Author + date */}
          <p className="post-card__author">{author}</p>

          {/* Heading row with link arrow */}
          <div className="post-card__heading-row">
            <h3 className="post-card__heading">{heading}</h3>
            <span className="post-card__arrow" aria-hidden="true">
              <IconArrowUpRight />
            </span>
          </div>

          {/* Excerpt */}
          {excerpt && (
            <p className="post-card__excerpt">{excerpt}</p>
          )}
        </div>

        {/* Category badges */}
        {badges.length > 0 && (
          <div className="post-card__badges" aria-label="Categories">
            {badges.map((b, i) => (
              <Badge key={i} label={b.label} colorScheme={b.colorScheme} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default BlogPostCard;
