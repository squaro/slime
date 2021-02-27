import { render } from '@testing-library/react';
import spinLeft from '../../styles/keyframes/spinLeft';
import spinRight from '../../styles/keyframes/spinRight';
import SpinArrow from '../SpinArrow';

const TestSVG = (): JSX.Element => (
  <svg>
    <path />
  </svg>
);

describe('SpinArrow', (): void => {
  it('renders the spin arrow component with right direction', (): void => {
    // Arrange
    const direction = true; // right
    const spinArrowTestId = 'spin-arrow';

    // Act
    const { getByTestId } = render(
      <SpinArrow $direction={direction} data-testid={spinArrowTestId}>
        <TestSVG />
      </SpinArrow>
    );

    // Assert
    const spinArrowElement = getByTestId(spinArrowTestId);
    const svgPathElements = spinArrowElement.getElementsByTagName('path');
    expect(spinArrowElement).toHaveStyle(`animation: ${spinRight.getName()} infinite 7s linear;`);
    expect(svgPathElements[0]).not.toHaveStyle(`transform: scaleX(-1) translateX(-100%)`);
  });

  it('renders the spin arrow component with left direction', (): void => {
    // Arrange
    const spinArrowTestId = 'spin-arrow';
    const direction = false; // left

    // Act
    const { getByTestId } = render(
      <SpinArrow $direction={direction} data-testid={spinArrowTestId}>
        <TestSVG />
      </SpinArrow>
    );

    // Assert
    const spinArrowElement = getByTestId(spinArrowTestId);
    const svgPathElements = spinArrowElement.getElementsByTagName('path');
    expect(spinArrowElement).toHaveStyle(`animation: ${spinLeft.getName()} infinite 7s linear;`);
    expect(svgPathElements[0]).toHaveStyle(`transform: scaleX(-1) translateX(-100%)`);
  });
});
