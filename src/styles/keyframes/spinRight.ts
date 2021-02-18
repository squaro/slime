import { keyframes } from 'styled-components';

// TODO: Calculate degree rotation values based on current angle
const spinRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export default spinRight;