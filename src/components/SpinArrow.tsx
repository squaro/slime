import styled, { css } from 'styled-components';
import spinLeft from '../styles/keyframes/spinLeft';
import spinRight from '../styles/keyframes/spinRight';
import unoColors from '../styles/keyframes/unoColors';

interface SpinArrowProps {
  $direction: boolean;
}

// TODO: Move animations to own file
const SpinArrow = styled.div`
  width: 90vmin;
  height: 90vmin;

  ${({ $direction }: SpinArrowProps) => css`
    animation: ${$direction ? spinRight : spinLeft} infinite 7s linear;

    & svg path {
      animation: ${unoColors} infinite 21s ease-in-out;

      // Assuming that the arrows are to the right by default,
      // only the left arrow's path is transformed
      ${!$direction && css`
        transform: scaleX(-1) translateX(-100%);
      `}
    }
  `}
`;

export default SpinArrow;
