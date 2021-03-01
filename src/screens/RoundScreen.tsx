import { useState } from 'react';
import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import SlimSpinArrow from '../components/SlimSpinArrow';
import unoColorsAnimation from '../styles/animations/unoColorsAnimation';

// TODO: Test state & actions
// TODO: Test round direction arrow props
const RoundScreen = (): JSX.Element => {
  // Store direction value
  //  * Left = false
  //  * Right = true (default)
  const [direction, setDirection] = useState(true);
  
  // Actions
  const toggleDirection = (): void => setDirection(!direction);

  return (
    <Screen onClick={toggleDirection}>
      <RoundDirectionArrow $direction={direction} colorAnimation={unoColorsAnimation}>
        <SlimSpinArrow />
      </RoundDirectionArrow>
    </Screen>
  );
};

export default RoundScreen;
