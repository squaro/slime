import { useState } from 'react';
import styled from 'styled-components';
import RoundDirectionArrow from '../components/RoundDirectionArrow';

const Wrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Prevents the user to click the arrow outside this wrapper
  overflow: hidden;
`;

function RoundScreen() {
  // Store direction value
  //  * Left = false
  //  * Right = true (default)
  const [roundDirection, setRoundDirection] = useState(true);

  // Actions
  const toggleDirection = () => setRoundDirection(!roundDirection);

  return (
    <Wrapper onClick={toggleDirection}>
      <RoundDirectionArrow direction={roundDirection} />
    </Wrapper>
  );
};

export default RoundScreen;
