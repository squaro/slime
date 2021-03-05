import React, { useState } from 'react';
import InstructionsModal from '../components/InstructionsModal';
import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import wakeLock from '../utils/wakeLock';

// TODO: Test state & actions
// TODO: Test round direction arrow props
// TODO: Test instructions modal
const RoundScreen: React.FunctionComponent = () => {
  // Store direction value
  //  * Left = false
  //  * Right = true (default)
  const [roundDirection, setRoundDirection] = useState(true);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(true);
  
  // Actions
  const closeInstructionsModal = (): void => setIsInstructionsModalOpen(false);
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
      <Screen onClick={toggleDirection} data-testid="round-screen">
        <RoundDirectionArrow direction={roundDirection} />
      </Screen>
      <InstructionsModal isOpen={isInstructionsModalOpen} onClose={start} />
    </React.Fragment>
  );
};

export default RoundScreen;
