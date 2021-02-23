import SlimSpinArrow from './SlimSpinArrow';
import SpinArrow from './SpinArrow';

interface RoundDirectionArrowProps {
  direction: boolean;
}

const RoundDirectionArrow = ({ direction }: RoundDirectionArrowProps): JSX.Element => (
  <SpinArrow $direction={direction}>
    <SlimSpinArrow />
  </SpinArrow>
);

export default RoundDirectionArrow;
