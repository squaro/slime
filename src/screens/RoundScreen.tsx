import { useState } from 'react';
import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';

const RoundScreen = (): JSX.Element => {
  // Store direction value
  //  * Left = false
  //  * Right = true (default)
  const [direction, setDirection] = useState(true);
  
  // Actions
  const toggleDirection = (): void => setDirection(!direction);

  return (
    <Screen onClick={toggleDirection}>
      <RoundDirectionArrow direction={direction} />
    </Screen>
  );
};

export default RoundScreen;
