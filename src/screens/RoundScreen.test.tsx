import React from 'react';
import { render } from '@testing-library/react';
import RoundScreen from './RoundScreen';

describe('RoundScreen', (): void => {
  it('renders the round screen component', (): void => {
    // Act
    const { getByText } = render(<RoundScreen />);

    // Assert
    const textElement = getByText(/slim-spin-arrow.svg/i);
    expect(textElement).toBeInTheDocument();
  });
});
