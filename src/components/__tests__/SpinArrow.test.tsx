import { render } from '@testing-library/react';
import spinLeftKeyframe from '../../styles/keyframes/spinLeftKeyframe';
import spinRightKeyframe from '../../styles/keyframes/spinRightKeyframe';
import SpinArrow from '../SpinArrow';

// Test components
const TestSVG = (): JSX.Element => (
  <svg>
    <path />
  </svg>
);

// Test variables
const spinLeftAnimation = `animation: ${spinLeftKeyframe.getName()} infinite 7s linear`;
const spinRightAnimation = `animation: ${spinRightKeyframe.getName()} infinite 7s linear`;
const spinArrowLeftTransform = `transform: scaleX(-1) translateX(-100%)`;

describe('SpinArrow', (): void => {
  it('renders the spin arrow component with default props', (): void => {
    // Arrange
    const spinArrowTestId = 'spin-arrow';

    // Act
    const { getByTestId } = render(
      <SpinArrow data-testid={spinArrowTestId}>
        <TestSVG />
      </SpinArrow>
    );

    // Assert
    const spinArrowElement = getByTestId(spinArrowTestId);
    const svgPathElements = spinArrowElement.getElementsByTagName('path');
    expect(spinArrowElement).not.toHaveStyle(spinLeftAnimation);
    expect(spinArrowElement).toHaveStyle(spinRightAnimation);
    expect(svgPathElements[0]).not.toHaveStyle(spinArrowLeftTransform);
  });

  it('renders the spin arrow component spinning to the right direction', (): void => {
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
    expect(spinArrowElement).not.toHaveStyle(spinLeftAnimation);
    expect(spinArrowElement).toHaveStyle(spinRightAnimation);
    expect(svgPathElements[0]).not.toHaveStyle(spinArrowLeftTransform);
  });

  it('renders the spin arrow component spinning to the left direction', (): void => {
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
    expect(spinArrowElement).toHaveStyle(spinLeftAnimation);
    expect(spinArrowElement).not.toHaveStyle(spinRightAnimation);
    expect(svgPathElements[0]).toHaveStyle(spinArrowLeftTransform);
  });
});
