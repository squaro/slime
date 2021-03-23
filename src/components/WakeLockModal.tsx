import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import strings from '../config/strings';

const Wrapper = Modal.styled`
  width: 80vmin;
  max-width: 288px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  border: 2px solid #0D58BB;
  border-radius: 15px;
  user-select: none;
`;

const Title = styled.h3`
  margin-top: 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin-top: 0;
  text-align: left;
`;

const TextClarification = styled(Text)`
  font-size: 12px;
  font-style: italic;
  color: #9E9E9E;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px 72px;
  margin-top: 12px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  background-color: #0D58BB;
  border: 0 none;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    background-color: #104D9E;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
  }
`;

type WakeLockModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function WakeLockModal({ isOpen, onClose }: WakeLockModalProps) {
  const { t } = useTranslation();
  const titleText = t(strings.WAKE_LOCK_MODAL_TITLE);
  const phoneText = t(strings.WAKE_LOCK_MODAL_PHONE);
  const clarificationText = t(strings.WAKE_LOCK_MODAL_CLARIFICATION);
  const closeButtonText = t(strings.WAKE_LOCK_MODAL_CLOSE_BUTTON);

  return (
    <Wrapper isOpen={isOpen} data-testid="wake-lock-modal">
      <Title data-testid="wake-lock-modal-title">
        {titleText}
      </Title>
      <Text data-testid="wake-lock-modal-feature-text">
        <Trans i18nKey={strings.WAKE_LOCK_MODAL_FEATURE} components={[<strong />]} />
      </Text>
      <Text data-testid="wake-lock-modal-phone-text">
        {phoneText}
      </Text>
      <TextClarification data-testid="wake-lock-modal-clarification-text">
        {clarificationText}
      </TextClarification>
      <Button onClick={onClose} data-testid="wake-lock-modal-close-button">
        {closeButtonText}
      </Button>
    </Wrapper>
  );
};

export default WakeLockModal;
