import React, { useState } from 'react';
import styled from 'styled-components';
import InstructionsModal from '../components/InstructionsModal';
import LanguageModal from '../components/LanguageModal';
import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import WakeLockMessage from '../components/WakeLockMessage';
import WakeLockModal from '../components/WakeLockModal';
import logger from '../utils/logger';
import wakeLock from '../utils/wakeLock';

const RoundDirectionArrowWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Solves the overflow issue when clicking the 'Learn more' button
  overflow: hidden;
`;

// TODO: Test state & actions
// TODO: Test round direction arrow props
// TODO: Test instructions modal
// TODO: Test language modal
const RoundScreen: React.FunctionComponent = () => {
  // Store direction value
  //  * Left = false
  //  * Right = true (default)
  const [roundDirection, setRoundDirection] = useState(true);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(true);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isWakeLockModalOpen, setIsWakeLockModalOpen] = useState(false);
  
  // Actions
  const closeInstructionsModal = (): void => setIsInstructionsModalOpen(false);

  const closeLanguageModal = (): void => setIsLanguageModalOpen(false);
  
  const closeWakeLockModal = (): void => setIsWakeLockModalOpen(false);

  const openWakeLockModal = (): void => setIsWakeLockModalOpen(true);

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

  const toggleDirection = (): void => {
    // The logic should be validated anyways besides the fact that the 
    // user can't click on the screen if the instructions modal is open
    if (!isInstructionsModalOpen) {
      setRoundDirection(!roundDirection);
    }
  };

  return (
    <React.Fragment>
      <Screen data-testid="round-screen">
        <RoundDirectionArrowWrapper onClick={toggleDirection}>
          <RoundDirectionArrow direction={roundDirection} />
        </RoundDirectionArrowWrapper>
        <WakeLockMessage isWakeLockEnabled={wakeLock.isEnabled} onClick={openWakeLockModal} />
      </Screen>
      <InstructionsModal isOpen={isInstructionsModalOpen} onClose={start} />
      <LanguageModal isOpen={isLanguageModalOpen} onClose={closeLanguageModal} />
      <WakeLockModal isOpen={isWakeLockModalOpen} onClose={closeWakeLockModal} />
    </React.Fragment>
  );
};

export default RoundScreen;
