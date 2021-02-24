import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import { useRound } from '../contexts/RoundContext';

const RoundScreen = (): JSX.Element => {
  const { toggleDirection } = useRound();

  return (
    <Screen onClick={toggleDirection}>
      <RoundDirectionArrow />
    </Screen>
  );
};

export default RoundScreen;
