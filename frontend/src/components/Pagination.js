import React, { useState } from 'react';

/**
 * Pagination component for the blog post listing.
 *
 * @param {Object} props
 * @param {number} props.totalPages - Total number of pages
 * @param {number} [props.initialPage] - Starting active page (1-indexed)
 */
// PUBLIC_INTERFACE
function Pagination({ totalPages = 10, initialPage = 1 }) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  /** Build the displayed page numbers with ellipsis logic */
  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 4) pages.push('...');
      if (currentPage > 3 && currentPage < totalPages - 2) pages.push(currentPage);
      if (currentPage < totalPages - 3) pages.push('...');
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }
    return [...new Set(pages)];
  };

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <nav className="pagination" aria-label="Pagination">
      {/* Previous button */}
      <button
        className="pagination__btn pagination__btn--prev"
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        {/* Arrow left SVG inline */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M15.8334 9.99999H4.16675M4.16675 9.99999L10.0001 15.8333M4.16675 9.99999L10.0001 4.16666"
            stroke="#667085"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Previous</span>
      </button>

      {/* Page numbers */}
      <ol className="pagination__numbers">
        {getPages().map((page, idx) =>
          page === '...' ? (
            <li key={`ellipsis-${idx}`} className="pagination__ellipsis" aria-hidden="true">
              …
            </li>
          ) : (
            <li key={page}>
              <button
                className={`pagination__number${currentPage === page ? ' pagination__number--active' : ''}`}
                onClick={() => setCurrentPage(page)}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            </li>
          )
        )}
      </ol>

      {/* Next button */}
      <button
        className="pagination__btn pagination__btn--next"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <span>Next</span>
        {/* Arrow right SVG inline */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M4.16675 9.99999H15.8334M15.8334 9.99999L10.0001 4.16666M15.8334 9.99999L10.0001 15.8333"
            stroke="#667085"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Pagination;
