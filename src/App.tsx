import { FileLock2 as WakeLockIcon } from '@styled-icons/bootstrap/FileLock2';
import { Globe as LanguageIcon } from '@styled-icons/bootstrap/Globe';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import GlobalStyles from './components/GlobalStyles';
import HeaderButton from './components/HeaderButton';
import InstructionsModal from './components/InstructionsModal';
import LanguageModal from './components/LanguageModal';
import ModalBackground from './components/ModalBackground.styles';
import WakeLockModal from './components/WakeLockModal';
import RoundScreen from './screens/RoundScreen';
import logger from './utils/logger';
import wakeLock from './utils/wakeLock';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Header = styled.nav`
  width: 100%;
  height: 48px;
  padding: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.main`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(true);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isWakeLockModalOpen, setIsWakeLockModalOpen] = useState(false);

  // Texts
  const { t, i18n } = useTranslation();
  const wakeLockLabel = t('wakeLock');
  const wakeLockStatusLabel = t(wakeLock.isEnabled ? 'enabled' : 'disabled');
  const languageLabel = t('language');
  // Workaround to force current language's type into 'en' or 'es'
  // TODO: Investigate if there is a way of improving the types
  const lang = (i18n.language.substring(0, 2) as unknown) as "en" | "es";
  const languageSelectedLabel = t(`lang.${lang}` as const);
  
  // Actions
  const closeInstructionsModal = () => setIsInstructionsModalOpen(false);
  const closeLanguageModal = () => setIsLanguageModalOpen(false);
  const closeWakeLockModal = () => setIsWakeLockModalOpen(false);
  const openLanguageModal = () => setIsLanguageModalOpen(true);
  const openWakeLockModal = () => setIsWakeLockModalOpen(true);

  // TODO: Move to wakeLock.ts to delegate responsability
  const enableWakeLock = async () => {
    try {
      logger.logInfo('[WakeLock] Locking screen...');
      await wakeLock.enable();
      logger.logInfo('[WakeLock] Screen locked!');
    } catch (err) {
      logger.logError('[WakeLock] An error occurred while locking the screen.', err);
    }
  };

  const start = async () => {
    await enableWakeLock();
    closeInstructionsModal();
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <ModalProvider backgroundComponent={ModalBackground}>

        <Header>
          <HeaderButton
            icon={<WakeLockIcon size="20" title={wakeLockLabel} />}
            text={wakeLockStatusLabel}
            onClick={openWakeLockModal}
          />
          <HeaderButton
            icon={<LanguageIcon size="16" title={languageLabel} />}
            text={languageSelectedLabel}
            onClick={openLanguageModal}
          />
        </Header>

        <Content>
          <RoundScreen />
        </Content>

        <InstructionsModal isOpen={isInstructionsModalOpen} onClose={start} />
        <LanguageModal isOpen={isLanguageModalOpen} onClose={closeLanguageModal} />
        <WakeLockModal isOpen={isWakeLockModalOpen} onClose={closeWakeLockModal} />

      </ModalProvider>
    </Wrapper>
  );
}

export default App;
