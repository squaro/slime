import React from 'react';
import { render } from '@testing-library/react';
import RoundDirectionArrow from './RoundDirectionArrow';

describe('RoundDirectionArrow', (): void => {
  it('renders the round direction arrow component with right direction', (): void => {
    // Arrange
    const direction = true; // true = right

    // Act
    const { getByText } = render(
      <RoundDirectionArrow direction={direction} />
    );

    // Assert
    const svgElement = getByText(/slim-spin-arrow.svg/i);
    expect(svgElement).toBeInTheDocument();
    expect(direction).toBe(true);
  });

  it('renders the round direction arrow component with left direction', (): void => {
    // Arrange
    const direction = false; // false = left

    // Act
    const { getByText } = render(
      <RoundDirectionArrow direction={direction} />
    );

    // Assert
    const svgElement = getByText(/slim-spin-arrow.svg/i);
    expect(svgElement).toBeInTheDocument();
    expect(direction).toBe(false);
  });
});
