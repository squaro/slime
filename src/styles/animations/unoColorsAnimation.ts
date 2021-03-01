import { css } from 'styled-components';
import unoColorsKeyframe from '../keyframes/unoColorsKeyframe';

// TODO: Add missing unit tests
const unoColorsAnimation = css`
  ${unoColorsKeyframe} infinite 21s ease-in-out;
`;

export default unoColorsAnimation;
