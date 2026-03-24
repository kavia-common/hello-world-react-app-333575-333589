import React from 'react';

/**
 * Badge component – renders a coloured pill tag.
 *
 * @param {Object} props
 * @param {string} props.label - Text inside the badge
 * @param {string} [props.colorScheme] - One of: 'purple', 'blue', 'pink', 'green', 'teal', 'orange', 'rose', 'gray', 'indigo'
 */
// PUBLIC_INTERFACE
function Badge({ label, colorScheme = 'purple' }) {
  return (
    <span className={`badge badge--${colorScheme}`}>
      {label}
    </span>
  );
}

export default Badge;
