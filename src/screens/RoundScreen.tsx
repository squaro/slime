import { useState } from 'react';
import InstructionsModal from '../components/InstructionsModal';
import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import wakeLock from '../utils/wakeLock';

// TODO: Test state & actions
// TODO: Test round direction arrow props
// TODO: Test instructions modal
const RoundScreen = (): JSX.Element => {
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
  const toggleDirection = (): void => {
    // TODO: Analyze if the modal can be moved outside the screen component to
    // avoid having to check if the instructions (or any) modal is open
    if (!isOpen) {
      setDirection(!direction);
    }
  };

  return (
    <Screen onClick={toggleDirection} data-testid="round-screen">
      <RoundDirectionArrow direction={direction} />
      <InstructionsModal isOpen={isOpen} onClose={start} />
    </Screen>
  );
};

export default RoundScreen;
