import styled, { css } from 'styled-components';
import spinLeft from '../styles/keyframes/spinLeft';
import spinRight from '../styles/keyframes/spinRight';

interface SpinArrowProps {
  $direction: boolean;
}

// TODO: Move animation to own file
const SpinArrow = styled.div`
  ${({ $direction }: SpinArrowProps) => css`
    animation: ${$direction ? spinRight : spinLeft} infinite 7s linear;

    & svg path {
      // Assuming that the arrows are to the right by default,
      // only the left arrow's path is transformed
      ${!$direction && css`
        transform: scaleX(-1) translateX(-100%);
      `}
    }
  `}
`;

export default SpinArrow;
