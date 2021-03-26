import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import strings from '../config/strings';
import ModalButton from './ModalButton.styles';
import ModalTitle from './ModalTitle.styles';

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

const Text = styled.p`
  margin-top: 0;
  text-align: left;
`;

const SupportText = styled(Text)`
  font-size: 12px;
  font-style: italic;
  color: #9E9E9E;
`;

const CloseButton = styled(ModalButton)`
  background-color: #0D58BB;

  &:active {
    background-color: #104D9E;
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
  const supportText = t(strings.WAKE_LOCK_MODAL_SUPPORT);
  const closeButtonText = t(strings.WAKE_LOCK_MODAL_CLOSE_BUTTON);

  return (
    <Wrapper isOpen={isOpen} data-testid="wake-lock-modal">
      <ModalTitle data-testid="wake-lock-modal-title">
        {titleText}
      </ModalTitle>
      <Text data-testid="wake-lock-modal-feature-text">
        <Trans i18nKey={strings.WAKE_LOCK_MODAL_FEATURE} components={[<strong />]} />
      </Text>
      <Text data-testid="wake-lock-modal-phone-text">
        {phoneText}
      </Text>
      <SupportText data-testid="wake-lock-modal-clarification-text">
        {supportText}
      </SupportText>
      <CloseButton onClick={onClose} data-testid="wake-lock-modal-close-button">
        {closeButtonText}
      </CloseButton>
    </Wrapper>
  );
};

export default WakeLockModal;
