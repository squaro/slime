import { render, screen } from '@testing-library/react';
import unoColorsKeyframe from '../../styles/keyframes/unoColorsKeyframe';
import RoundDirectionArrow, { Wrapper } from '../RoundDirectionArrow';

describe('<Wrapper />', (): void => {
  // Test components
  const TestSVG = (): JSX.Element => (
    <svg>
      <path data-testid="path"/>
    </svg>
  );

  it('renders the component successfully', (): void => {
    // Arrange
    const direction = true; // right
    const wrapperTestId = 'wrapper';
    const svgTestId = 'path';

    // Act
    render(
      <Wrapper $direction={direction} data-testid={wrapperTestId}>
        <TestSVG />
      </Wrapper>
    );

    // Assert
    expect(screen.getByTestId(wrapperTestId)).toHaveStyle(`
      width: 90vmin;
      height: 90vmin;
    `);
    expect(screen.getByTestId(svgTestId)).toHaveStyle(`
      animation: ${unoColorsKeyframe.getName()} infinite 21s ease-in-out
    `);
  });
});

describe('<RoundDirectionArrow />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'round-direction-arrow';

    // Act
    render(<RoundDirectionArrow direction={true} />);

    // Assert
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(/slim-spin-arrow.svg/i)).toBeInTheDocument();
  });
});
