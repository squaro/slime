import { keyframes } from 'styled-components';

// TODO: Calculate degree rotation values based on current angle
// TODO: Add missing unit tests
const spinLeftKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default spinLeftKeyframe;