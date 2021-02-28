import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders App correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi there 👋/i);
  expect(linkElement).toBeInTheDocument();
});
