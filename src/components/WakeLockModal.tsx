import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from './Modal';
import strings from '../config/strings';

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
  const titleText = t(strings.WAKE_LOCK_MODAL_TITLE);
  const phoneText = t(strings.WAKE_LOCK_MODAL_PHONE);
  const supportText = t(strings.WAKE_LOCK_MODAL_SUPPORT);
  const closeButtonText = t(strings.WAKE_LOCK_MODAL_CLOSE_BUTTON);
  const primaryColor = '#0D58BB';
  const primaryDarkColor = '#104D9E';

  return (
    <Modal
      closeButtonLabel={closeButtonText}
      isOpen={isOpen}
      primaryColor={primaryColor}
      primaryDarkColor={primaryDarkColor}
      titleLabel={titleText}
      onClose={onClose}
    >
      <Text>
        <Trans components={[<strong />]}>
          {strings.WAKE_LOCK_MODAL_FEATURE}
        </Trans>
      </Text>
      <Text>
        {phoneText}
      </Text>
      <SupportText>
        {supportText}
      </SupportText>
    </Modal>
  );
};

export default WakeLockModal;
