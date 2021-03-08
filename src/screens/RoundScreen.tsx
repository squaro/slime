import React, { useState } from 'react';
import styled from 'styled-components';
import InstructionsModal from '../components/InstructionsModal';
import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import WakeLockMessage from '../components/WakeLockMessage';
import WakeLockModal from '../components/WakeLockModal';
import wakeLock from '../utils/wakeLock';

const RoundDirectionArrowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// TODO: Test state & actions
// TODO: Test round direction arrow props
// TODO: Test instructions modal
const RoundScreen: React.FunctionComponent = () => {
  // Store direction value
  //  * Left = false
  //  * Right = true (default)
  const [roundDirection, setRoundDirection] = useState(true);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(true);
  const [isWakeLockModalOpen, setIsWakeLockModalOpen] = useState(false);
  
  // Actions
  const closeInstructionsModal = (): void => setIsInstructionsModalOpen(false);
  const closeWakeLockModal = (): void => setIsWakeLockModalOpen(false);
  const openWakeLockModal = (): void => setIsWakeLockModalOpen(true);
  const enableWakeLock = (): Promise<void> => wakeLock.enable();
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
      <WakeLockModal isOpen={isWakeLockModalOpen} onClose={closeWakeLockModal} />
    </React.Fragment>
  );
};

export default RoundScreen;
