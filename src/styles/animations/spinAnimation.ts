import { css } from 'styled-components';
import spinRightKeyframe from '../keyframes/spinRightKeyframe';
import spinLeftKeyframe from '../keyframes/spinLeftKeyframe';

// TODO: Add missing unit tests
const spinAnimation = (direction: boolean) => css`
  ${direction ? spinRightKeyframe : spinLeftKeyframe} infinite 7s linear;
`;

export default spinAnimation;
