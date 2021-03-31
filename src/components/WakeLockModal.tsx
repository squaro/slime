import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from './Modal';

const Text = styled.p`
  text-align: left;

  &:not(:first-child) {
    margin-top: 0;
  }
`;

const SupportText = styled(Text)`
  font-size: 12px;
  font-style: italic;
  color: #9E9E9E;
`;

type WakeLockModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function WakeLockModal({ isOpen, onClose }: WakeLockModalProps) {
  const { t } = useTranslation();
  const titleLabel = t('wakeLockModal.title');
  const featureLabelKey = 'wakeLockModal.feature';
  const phoneLabel = t('wakeLockModal.phone');
  const supportLabel = t('wakeLockModal.support');
  const closeButtonLabel = t('wakeLockModal.close');
  const name = 'wakeLock';
  const primaryColor = '#0D58BB';
  const primaryDarkColor = '#104D9E';

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
          {featureLabelKey}
        </Trans>
      </Text>
      <Text>
        {phoneLabel}
      </Text>
      <SupportText>
        {supportLabel}
      </SupportText>
    </Modal>
  );
};

export default WakeLockModal;
