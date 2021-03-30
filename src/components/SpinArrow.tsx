import styled from 'styled-components';
import spinAnimation from '../styles/animations/spinAnimation';

const SpinArrow = styled.div`
  &[aria-checked="false"] {
    // Spin animation
    animation: ${spinAnimation(false)};

    // Direction transform
    & svg path {
      // Assuming that the arrows are to the right by default,
      // only the left arrow's path is transformed
      transform: scaleX(-1) translateX(-100%);
    }
  }

  &[aria-checked="true"] {
    // Spin animation
    animation: ${spinAnimation(true)};
  }
`;

SpinArrow.defaultProps = {
  'aria-checked': true,
};

export default SpinArrow;
