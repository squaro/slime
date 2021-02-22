import React from 'react';
import { render } from '@testing-library/react';
import SlimSpinArrow from './SlimSpinArrow';

describe('SlimSpinArrow', (): void => {
  it('renders the slim spin arrow component', (): void => {
    // Act
    const { getByText } = render(<SlimSpinArrow />);

    // Assert
    const svgElement = getByText(/slim-spin-arrow.svg/i);
    expect(svgElement).toBeInTheDocument();
  });
});
