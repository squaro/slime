import { FileLock2 } from '@styled-icons/bootstrap/FileLock2';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import strings from '../config/strings';
import wakeLock from '../utils/wakeLock';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: transparent;
  border-radius: 5px;
  border: 0 none;
  outline: none;
  cursor: pointer;
  user-select: none;
`;

const WakeLockIcon = styled(FileLock2)`
  color: #757575;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    color: #BDBDBD;
  }
`;

const Separator = styled.div`
  width: 3px;
  height: 3px;
  margin: 0 6px;
  background-color: #757575;
  border-radius: 3px;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    background-color: #BDBDBD;
  }
`;

const Status = styled.span`
  color: #757575;
  font-size: 12px;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    color: #BDBDBD;
  }
`;

type WakeLockButtonProps = {
  onClick: () => void;
};

function WakeLockButton({ onClick }: WakeLockButtonProps) {
  const { t } = useTranslation();
  const statusText = t(wakeLock.isEnabled ? strings.WAKE_LOCK_STATUS_ENABLED : strings.WAKE_LOCK_STATUS_DISABLED);

  return (
    <Wrapper onClick={onClick} data-testid="wake-lock-button">
      <WakeLockIcon size="20" data-testid="wake-lock-button-wake-lock-icon" />
      <Separator data-testid="wake-lock-button-separator" />
      <Status data-testid="wake-lock-button-status">
        {statusText}
      </Status>
    </Wrapper>
  );
}

export default WakeLockButton;
