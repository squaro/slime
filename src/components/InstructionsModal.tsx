import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { ReactComponent as TapScreen } from '../assets/instructions/tap-screen.svg';
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
  border: 2px solid #0DBB13;
  border-radius: 15px;
  user-select: none;
`;

const Title = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;

const Text = styled.p`
  text-align: center;
  padding: 0 32px;
`;

const TapScreenImage = styled(TapScreen)`
  margin: 12px;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px 72px;
  margin-top: 12px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  background-color: #0DBB13;
  border: 0 none;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    background-color: #0DAA12;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
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
      <Title data-testid="instructions-modal-title">
        {titleText}
      </Title>
      <Text data-testid="instructions-modal-text">
        <Trans i18nKey={strings.INSTRUCTIONS_MODAL_TEXT} components={[<strong />]} />
      </Text>
      <TapScreenImage data-testid="instructions-modal-tap-screen-image" />
      <Button onClick={onClose} data-testid="instructions-modal-close-button">
        {closeButtonText}
      </Button>
    </Wrapper>
  );
};

export default InstructionsModal;
