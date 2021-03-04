import React from 'react';
import styled from 'styled-components';
import unoColorsAnimation from '../styles/animations/unoColorsAnimation';
import SlimSpinArrow from './SlimSpinArrow';
import SpinArrow from './SpinArrow';

export const Wrapper = styled(SpinArrow)`
  width: 90vmin;
  height: 90vmin;

  // Color animation
  & svg path {
    animation: ${unoColorsAnimation};
  }
`;

interface RoundDirectionArrowProps {
  direction: boolean;
}

const RoundDirectionArrow: React.FunctionComponent<RoundDirectionArrowProps> = ({ direction }) => (
  <Wrapper $direction={direction} data-testid="round-direction-arrow">
    <SlimSpinArrow />
  </Wrapper>
);

export default RoundDirectionArrow;
