import styled, { css } from 'styled-components';
import unoColorsAnimation from '../styles/animations/unoColorsAnimation';
import spinAnimation from '../styles/animations/spinAnimation';

interface SpinArrowProps {
  $animateColor?: boolean;
  $direction: boolean;
  $spin?: boolean;
}

// TODO: Determine color animation from theme
const SpinArrow = styled.div<SpinArrowProps>`
  width: 90vmin;
  height: 90vmin;

  // Spin animation
  ${({ $direction, $spin }) => $spin && css`
    animation: ${spinAnimation($direction)};
  `}

  // Color animation
  ${({ $animateColor }) => $animateColor && css`
    & svg path {
      animation: ${unoColorsAnimation};
    }
  `}

  // Transform direction
  ${({ $direction }) => !$direction && css`
    // Assuming that the arrows are to the right by default,
    // only the left arrow's path is transformed
    & svg path {
      transform: scaleX(-1) translateX(-100%);
    }
  `}
`;

export default SpinArrow;
