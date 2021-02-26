import styled, { css } from 'styled-components';
import spinAnimation from '../styles/animations/spinAnimation';

interface SpinArrowProps {
  $direction?: boolean;
}

const SpinArrow = styled.div<SpinArrowProps>`
  ${({ $direction }) => css`
    // Spin animation
    animation: ${spinAnimation(!!$direction)};

    // Direction transform
    ${!$direction && css`
      & svg path {
        // Assuming that the arrows are to the right by default,
        // only the left arrow's path is transformed
        transform: scaleX(-1) translateX(-100%);
      }
    `}
  `}
`;

SpinArrow.defaultProps = {
  $direction: true,
};

export default SpinArrow;
