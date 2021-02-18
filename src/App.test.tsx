import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders applications name', (): void => {
  // Act
  render(<App />);

  // Assert
  const spanElement = screen.getByText(/slime/i);
  expect(spanElement).toBeInTheDocument();
});
