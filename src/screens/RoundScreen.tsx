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
  const [direction, setDirection] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  
  // Actions
  const closeModal = (): void => setIsOpen(false);
  const enableWakeLock = (): Promise<void> => wakeLock.enable();
  const start = async (): Promise<void> => {
    await enableWakeLock();
    closeModal();
  };
  const toggleDirection = (): void => setDirection(!direction);

  return (
    <React.Fragment>
      <Screen onClick={toggleDirection} data-testid="round-screen">
        <RoundDirectionArrow direction={direction} />
      </Screen>
      <InstructionsModal isOpen={isOpen} onClose={start} />
    </React.Fragment>
  );
};

export default RoundScreen;
