import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from './Modal';
import { ReactComponent as TapScreen } from '../assets/instructions/tap-screen.svg';
import strings from '../config/strings';

const Text = styled.p`
  text-align: center;
`;

const TapScreenImage = styled(TapScreen)`
  margin: 12px;
`;

type InstructionsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function InstructionsModal({ isOpen, onClose }: InstructionsModalProps) {
  const { t } = useTranslation();
  const titleLabel = t(strings.INSTRUCTIONS_MODAL_TITLE);
  const closeButtonLabel = t(strings.INSTRUCTIONS_MODAL_CLOSE_BUTTON);
  const primaryColor = '#0DBB13';
  const primaryDarkColor = '#0DAA12';

  return (
    <Modal
      closeButtonLabel={closeButtonLabel}
      isOpen={isOpen}
      primaryColor={primaryColor}
      primaryDarkColor={primaryDarkColor}
      titleLabel={titleLabel}
      onClose={onClose}
    >
      <Text>
        <Trans components={[<strong />]}>
          {strings.INSTRUCTIONS_MODAL_TEXT}
        </Trans>
      </Text>
      <TapScreenImage />
    </Modal>
  );
};

export default InstructionsModal;
