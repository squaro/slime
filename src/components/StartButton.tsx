import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../config/routes';
import GreenButton from './GreenButton';

const StyledGreenButton = styled(GreenButton)`
  width: 90%;
  max-width: 288px;
  margin-bottom: 24px;
`;

// TODO: Handle wake lock
// TODO: Navigate to Round Screen
const StartButton = (): JSX.Element => {
  const { push } = useHistory();
  const navigateToRoundScreen = (): void => push(routes.round);

  return (
    <StyledGreenButton onClick={navigateToRoundScreen}>
      Start
    </StyledGreenButton>
  );
};

export default StartButton;
