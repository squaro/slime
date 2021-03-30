import { useState } from 'react';
import styled from 'styled-components';
import SlimSpinArrow from '../components/SlimSpinArrow';
import SpinArrow from '../components/SpinArrow';
import unoColorsAnimation from '../styles/animations/unoColorsAnimation';

const Wrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Prevents the user to click the arrow outside this wrapper
  overflow: hidden;
`;

const RoundDirectionArrow = styled(SpinArrow)`
  width: 90vmin;
  height: 90vmin;

  // Color animation
  & svg path {
    animation: ${unoColorsAnimation};
  }
`;

function RoundScreen() {
  // Store direction value
  //  * Left = false
  //  * Right = true (default)
  const [roundDirection, setRoundDirection] = useState(true);

  // Actions
  const toggleDirection = () => setRoundDirection(!roundDirection);

  return (
    <Wrapper role="region" onClick={toggleDirection}>
      <RoundDirectionArrow role="checkbox" aria-checked={roundDirection}>
        <SlimSpinArrow title="arrow" />
      </RoundDirectionArrow>
    </Wrapper>
  );
};

export default RoundScreen;
