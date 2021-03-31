import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from './Modal';
import { ReactComponent as TapScreen } from '../assets/instructions/tap-screen.svg';

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
  const titleLabel = t('instructionsModal.title');
  const instructionsLabelKey = 'instructionsModal.instructions';
  const closeButtonLabel = t('instructionsModal.close');
  const name = 'instructions';
  const primaryColor = '#0DBB13';
  const primaryDarkColor = '#0DAA12';

  return (
    <Modal
      closeButtonLabel={closeButtonLabel}
      isOpen={isOpen}
      name={name}
      primaryColor={primaryColor}
      primaryDarkColor={primaryDarkColor}
      titleLabel={titleLabel}
      onClose={onClose}
    >
      <Text>
        <Trans components={[<strong />]}>
          {instructionsLabelKey}
        </Trans>
      </Text>
      <TapScreenImage />
    </Modal>
  );
};

export default InstructionsModal;
