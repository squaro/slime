import { useRoundState } from '../contexts/RoundContext';
import SlimSpinArrow from './SlimSpinArrow';
import SpinArrow from './SpinArrow';

const RoundDirectionArrow = (): JSX.Element => {
  const { direction } = useRoundState();

  return (
    <SpinArrow $direction={direction}>
      <SlimSpinArrow />
    </SpinArrow>
  );
};

export default RoundDirectionArrow;
