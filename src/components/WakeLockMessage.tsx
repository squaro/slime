import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import strings from '../config/strings';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

type MessageProps = {
  warning: boolean;
};

const Message = styled.p<MessageProps>`
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: #757575;

  ${({ warning }) => warning && css`
    color: #8F8C29;
  `}
`;

const Button = styled.a`
  padding: 2px 4px;
  font-size: 12px;
  color: #757575;
  text-decoration: underline;
  cursor: pointer;

  &:active,
  &:hover {
    color: #626262;
  }
`;

type WakeLockMessageProps = {
  isWakeLockEnabled: boolean;
  onClick: () => void;
};

function WakeLockMessage({ isWakeLockEnabled, onClick }: WakeLockMessageProps) {
  const { t } = useTranslation();
  const showWarning = !isWakeLockEnabled;
  const messageText = t(!showWarning ? strings.WAKE_LOCK_MESSAGE_ENABLED : strings.WAKE_LOCK_MESSAGE_DISABLED);
  const buttonText = t(strings.WAKE_LOCK_MESSAGE_ACTION_BUTTON);

  return (
    <Wrapper>
      <Message warning={showWarning} data-testid="wake-lock-message">
        {messageText}
      </Message>
      <Button onClick={onClick} data-testid="wake-lock-message-button">
        {buttonText}
      </Button>
    </Wrapper>
  );
}

export default WakeLockMessage;
