import React from 'react';
import { render } from '@testing-library/react';
import spinLeft from '../../styles/keyframes/spinLeft';
import spinRight from '../../styles/keyframes/spinRight';
import SpinArrow from '../SpinArrow';

describe('SpinArrow', (): void => {
  it('renders the spin arrow component with right direction', (): void => {
    // Arrange
    const spinArrowTestId = 'spin-arrow';
    const direction = true; // true = right

    // Act
    const { getByTestId } = render(
      <SpinArrow $direction={direction} data-testid={spinArrowTestId} />
    );

    // Assert
    const spinArrowElement = getByTestId(spinArrowTestId);
    expect(spinArrowElement).toHaveStyle(`
      width: 90vmin;
      height: 90vmin;
      animation: ${spinRight.getName()} infinite 7s linear;
    `);
    expect(direction).toBe(true);
  });

  it('renders the spin arrow component with left direction', (): void => {
    // Arrange
    const spinArrowTestId = 'spin-arrow';
    const direction = false; // false = left

    // Act
    const { getByTestId } = render(
      <SpinArrow $direction={direction} data-testid={spinArrowTestId} />
    );

    // Assert
    const spinArrowElement = getByTestId(spinArrowTestId);
    expect(spinArrowElement).toHaveStyle(`
      width: 90vmin;
      height: 90vmin;
      animation: ${spinLeft.getName()} infinite 7s linear;
    `);
    expect(direction).toBe(false);
  });
});
