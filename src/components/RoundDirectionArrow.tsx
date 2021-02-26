import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import SpinArrow from './SpinArrow';

interface RoundDirectionArrowProps {
  colorAnimation?: FlattenSimpleInterpolation;
}

const RoundDirectionArrow = styled(SpinArrow)<RoundDirectionArrowProps>`
  width: 90vmin;
  height: 90vmin;

  // Color animation
  ${({ colorAnimation }) => colorAnimation && css`
    & svg path {
      animation: ${colorAnimation};
    }
  `}
`;

export default RoundDirectionArrow;
