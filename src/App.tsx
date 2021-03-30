import { FileLock2 as WakeLockIcon } from '@styled-icons/bootstrap/FileLock2';
import { Globe as LanguageIcon } from '@styled-icons/bootstrap/Globe';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import GlobalStyles from './components/GlobalStyles';
import HeaderButton from './components/HeaderButton';
import InstructionsModal from './components/InstructionsModal';
import LanguageModal from './components/LanguageModal';
import ModalBackground from './components/ModalBackground.styles';
import WakeLockModal from './components/WakeLockModal';
import routes from './config/routes';
import RoundScreen from './screens/RoundScreen';
import logger from './utils/logger';
import wakeLock from './utils/wakeLock';
import strings from './config/strings';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// TODO: Test GlobalStyles component
// TODO: Test ModalProvider component
// TODO: Analyze if the router will be needed further
function App() {
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(true);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isWakeLockModalOpen, setIsWakeLockModalOpen] = useState(false);

  // Texts
  const { t, i18n } = useTranslation();
  const wakeLockStatusText = t(wakeLock.isEnabled ? strings.WAKE_LOCK_STATUS_ENABLED : strings.WAKE_LOCK_STATUS_DISABLED);
  const languageShortText = i18n.language.substr(0, 2).toUpperCase();
  
  // Actions
  const closeInstructionsModal = () => setIsInstructionsModalOpen(false);
  const closeLanguageModal = () => setIsLanguageModalOpen(false);
  const closeWakeLockModal = () => setIsWakeLockModalOpen(false);
  const openLanguageModal = () => setIsLanguageModalOpen(true);
  const openWakeLockModal = () => setIsWakeLockModalOpen(true);

  // TODO: Move to wakeLock.ts to delegate responsability
  const enableWakeLock = async (): Promise<void> => {
    try {
      logger.logInfo('[WakeLock] Locking screen...');
      await wakeLock.enable();
      logger.logInfo('[WakeLock] Screen locked!');
    } catch (err) {
      logger.logError('[WakeLock] An error occurred while locking the screen.', err);
    }
  };

  const start = async (): Promise<void> => {
    await enableWakeLock();
    closeInstructionsModal();
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <ModalProvider backgroundComponent={ModalBackground}>

        <Header>
          <HeaderButton
            icon={<WakeLockIcon size="20" title="Wake Lock" />}
            text={wakeLockStatusText}
            onClick={openWakeLockModal}
          />
          <HeaderButton
            icon={<LanguageIcon size="16" title="Language" />}
            text={languageShortText}
            onClick={openLanguageModal}
          />
        </Header>

        <Content>
          <Router>
            <Switch>
              <Route path={routes.home}>
                <RoundScreen />
              </Route>
            </Switch>
          </Router>
        </Content>

        <InstructionsModal isOpen={isInstructionsModalOpen} onClose={start} />
        <LanguageModal isOpen={isLanguageModalOpen} onClose={closeLanguageModal} />
        <WakeLockModal isOpen={isWakeLockModalOpen} onClose={closeWakeLockModal} />

      </ModalProvider>
    </Wrapper>
  );
}

export default App;
