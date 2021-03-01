import { useState } from 'react';
import InstructionsModal from '../components/InstructionsModal';
import ModalText from '../components/ModalText';
import ModalTitle from '../components/ModalTitle';
import RoundDirectionArrow from '../components/RoundDirectionArrow';
import Screen from '../components/Screen';
import SlimSpinArrow from '../components/SlimSpinArrow';
import StartButton from '../components/StartButton';
import TapScreenImage from '../components/TapScreenImage';
import unoColorsAnimation from '../styles/animations/unoColorsAnimation';

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
  const toggleDirection = (): void => {
    if (!isOpen) {
      setDirection(!direction);
    }
  };

  return (
    <Screen onClick={toggleDirection}>
      <RoundDirectionArrow $direction={direction} colorAnimation={unoColorsAnimation}>
        <SlimSpinArrow />
      </RoundDirectionArrow>
      <InstructionsModal isOpen={isOpen}>
        <ModalTitle>Instructions</ModalTitle>
        <ModalText>Tap <b>anywhere</b> in the screen to change the arrow's direction.</ModalText>
        <TapScreenImage />
        <StartButton onClick={closeModal}>
          Got it!
        </StartButton>
      </InstructionsModal>
    </Screen>
  );
};

export default RoundScreen;
