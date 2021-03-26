import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { ReactComponent as TapScreen } from '../assets/instructions/tap-screen.svg';
import strings from '../config/strings';
import ModalBase from './ModalBase.styles';
import ModalButton from './ModalButton.styles';
import ModalTitle from './ModalTitle.styles';

const ModalStyles = styled(ModalBase)`
  border-color: #0DBB13;
`;

const Text = styled.p`
  text-align: center;
  padding: 0 32px;
`;

const TapScreenImage = styled(TapScreen)`
  margin: 12px;
`;

const ModalCloseButton = styled(ModalButton)`
  background-color: #0DBB13;

  &:active {
    background-color: #0DAA12;
  }
`;

type InstructionsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function InstructionsModal({ isOpen, onClose }: InstructionsModalProps) {
  const { t } = useTranslation();
  const titleText = t(strings.INSTRUCTIONS_MODAL_TITLE);
  const closeButtonText = t(strings.INSTRUCTIONS_MODAL_CLOSE_BUTTON);

  return (
    <Modal isOpen={isOpen}>
      <ModalStyles data-testid="instructions-modal">
        <ModalTitle data-testid="instructions-modal-title">
          {titleText}
        </ModalTitle>
        <Text data-testid="instructions-modal-text">
          <Trans i18nKey={strings.INSTRUCTIONS_MODAL_TEXT} components={[<strong />]} />
        </Text>
        <TapScreenImage data-testid="instructions-modal-tap-screen-image" />
        <ModalCloseButton onClick={onClose} data-testid="instructions-modal-close-button">
          {closeButtonText}
        </ModalCloseButton>
      </ModalStyles>
    </Modal>
  );
};

export default InstructionsModal;
