import { render, screen } from '@testing-library/react';
import App from './App';

test('renders THE BLOG heading', () => {
  render(<App />);
  // The hero banner contains an h1 with "THE BLOG"
  const heading = screen.getByRole('heading', { name: /the blog/i, level: 1 });
  expect(heading).toBeInTheDocument();
});

test('renders Recent blog posts section', () => {
  render(<App />);
  const recentHeading = screen.getByRole('heading', { name: /recent blog posts/i });
  expect(recentHeading).toBeInTheDocument();
});

test('renders All blog posts section', () => {
  render(<App />);
  const allHeading = screen.getByRole('heading', { name: /all blog posts/i });
  expect(allHeading).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /newsletter/i })).toBeInTheDocument();
});

test('renders footer with copyright', () => {
  render(<App />);
  expect(screen.getByText(/© 2023/i)).toBeInTheDocument();
});
