import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { ReactComponent as TapScreen } from '../assets/instructions/tap-screen.svg';
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
  border: 2px solid #0DBB13;
  border-radius: 15px;
  user-select: none;
`;

const Text = styled.p`
  text-align: center;
  padding: 0 32px;
`;

const TapScreenImage = styled(TapScreen)`
  margin: 12px;
`;

const CloseButton = styled(ModalButton)`
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
    <Wrapper isOpen={isOpen} data-testid="instructions-modal">
      <ModalTitle data-testid="instructions-modal-title">
        {titleText}
      </ModalTitle>
      <Text data-testid="instructions-modal-text">
        <Trans i18nKey={strings.INSTRUCTIONS_MODAL_TEXT} components={[<strong />]} />
      </Text>
      <TapScreenImage data-testid="instructions-modal-tap-screen-image" />
      <CloseButton onClick={onClose} data-testid="instructions-modal-close-button">
        {closeButtonText}
      </CloseButton>
    </Wrapper>
  );
};

export default InstructionsModal;
