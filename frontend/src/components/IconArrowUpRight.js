import React from 'react';

/**
 * Inline SVG arrow-up-right icon used on blog post card headings.
 *
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class names
 * @param {string} [props.color] - Stroke colour (defaults to current text colour)
 */
// PUBLIC_INTERFACE
function IconArrowUpRight({ className = '', color = '#1A1A1A' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M7 21L17 11M17 11H7M17 11V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconArrowUpRight;
