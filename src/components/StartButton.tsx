import styled from 'styled-components';
import GreenButton from './GreenButton';

const StyledGreenButton = styled(GreenButton)`
  width: 90%;
  max-width: 288px;
  margin-bottom: 24px;
`;

// TODO: Handle wake lock
// TODO: Navigate to Round Screen
const StartButton = (): JSX.Element => (
  <StyledGreenButton>
    Start
  </StyledGreenButton>
);

export default StartButton;
