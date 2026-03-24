import React from 'react';

/**
 * Footer component – renders the site footer with copyright and social links.
 */
// PUBLIC_INTERFACE
function Footer() {
  const socialLinks = [
    { label: 'Twitter', href: '#twitter' },
    { label: 'LinkedIn', href: '#linkedin' },
    { label: 'Email', href: '#email' },
    { label: 'RSS feed', href: '#rss' },
    { label: 'Add to Feedly', href: '#feedly' },
  ];

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">© 2023</p>
        <nav className="site-footer__nav" aria-label="Social links">
          <ul className="site-footer__links">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="site-footer__link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
