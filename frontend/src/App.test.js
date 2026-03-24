import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StreamVibe logo', () => {
  render(<App />);
  const logo = screen.getByAltText('StreamVibe');
  expect(logo).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Movies & Shows')).toBeInTheDocument();
});

test('renders Stranger Things title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /stranger things/i })).toBeInTheDocument();
});

test('renders Seasons and Episodes section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /seasons and episodes/i })).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  expect(screen.getByText(/@2023 streamvib/i)).toBeInTheDocument();
});
