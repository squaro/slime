import { useState } from 'react';
import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import SlimSpinArrow from '../components/SlimSpinArrow';

// TODO: Test state & actions
const RoundScreen = (): JSX.Element => {
  // Store direction value
  //  * Left = false
  //  * Right = true (default)
  const [direction, setDirection] = useState(true);
  
  // Actions
  const toggleDirection = (): void => setDirection(!direction);

  return (
    <Screen onClick={toggleDirection}>
      <RoundDirectionArrow $direction={direction}>
        <SlimSpinArrow />
      </RoundDirectionArrow>
    </Screen>
  );
};

export default RoundScreen;
