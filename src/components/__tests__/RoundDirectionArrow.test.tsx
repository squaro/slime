import { render } from '@testing-library/react';
import unoColors from '../../styles/keyframes/unoColors';
import RoundDirectionArrow from '../RoundDirectionArrow';

const TestSVG = (): JSX.Element => (
  <svg>
    <path />
  </svg>
);

describe('RoundDirectionArrow', (): void => {
  it('renders the round direction arrow component', (): void => {
    // Arrange
    const direction = true; // right
    const roundDirectionArrowTestId = 'round-direction-arrow';

    // Act
    const { getByTestId } = render(
      <RoundDirectionArrow $direction={direction} data-testid={roundDirectionArrowTestId}>
        <TestSVG />
      </RoundDirectionArrow>
    );

    // Assert
    const roundDirectionArrowElement = getByTestId(roundDirectionArrowTestId);
    const svgPathElements = roundDirectionArrowElement.getElementsByTagName('path');
    expect(roundDirectionArrowElement).toHaveStyle(`
      width: 90vmin;
      height: 90vmin;
    `);
    expect(svgPathElements[0]).toHaveStyle(`animation: ${unoColors.getName()} infinite 21s ease-in-out;`);
  });
});
