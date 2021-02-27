import styled from 'styled-components';
import unoColors from '../styles/keyframes/unoColors';
import SpinArrow from './SpinArrow';

// TODO: Move animation to own file
const RoundDirectionArrow = styled(SpinArrow)`
  width: 90vmin;
  height: 90vmin;

  & svg path {
    animation: ${unoColors} infinite 21s ease-in-out;
  }
`;

export default RoundDirectionArrow;
