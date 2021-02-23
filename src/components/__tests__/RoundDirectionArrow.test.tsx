import React from 'react';
import { render } from '@testing-library/react';
import * as RoundContext from '../../contexts/RoundContext';
import RoundDirectionArrow from '../RoundDirectionArrow';

// Spied variables
const useRoundStateSpy = jest.spyOn(RoundContext, 'useRoundState');

// Context variables
const { RoundProvider } = RoundContext;

describe('RoundDirectionArrow', (): void => {
  afterEach((): void => {
    useRoundStateSpy.mockReset();
  });

  it('renders the round direction arrow component with right direction', (): void => {
    // Arrange
    const direction = true; // right
    useRoundStateSpy.mockReturnValue({ direction });
  
    // Act
    const { getByText } = render(
      <RoundProvider>
        <RoundDirectionArrow />
      </RoundProvider>
    );
  
    // Assert
    const svgElement = getByText(/slim-spin-arrow.svg/i);
    expect(svgElement).toBeInTheDocument();
    expect(direction).toBe(true);
  });
  
  it('renders the round direction arrow component with left direction', (): void => {
    // Arrange
    const direction = false; // left
    useRoundStateSpy.mockReturnValue({ direction });
  
    // Act
    const { getByText } = render(
      <RoundProvider>
        <RoundDirectionArrow />
      </RoundProvider>
    );
  
    // Assert
    const svgElement = getByText(/slim-spin-arrow.svg/i);
    expect(svgElement).toBeInTheDocument();
    expect(direction).toBe(false);
  });
});
