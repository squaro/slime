import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import { useRoundDispatch } from '../contexts/RoundContext';

const RoundScreen = (): JSX.Element => {
  const dispatch = useRoundDispatch();

  // Actions
  const toggleDirection = (): void => dispatch({ type: 'TOGGLE' });

  return (
    <Screen onClick={toggleDirection}>
      <RoundDirectionArrow />
    </Screen>
  );
};

export default RoundScreen;
