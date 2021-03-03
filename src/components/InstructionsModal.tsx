import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { ReactComponent as TapScreen } from '../assets/instructions/tap-screen.svg';

export const Wrapper = Modal.styled`
  width: 80vmin;
  max-width: 288px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  border: 2px solid #0DBB13;
  border-radius: 15px;
`;

export const Title = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;

export const Text = styled.p`
  text-align: center;
  padding: 0 32px;
`;

export const TapScreenImage = styled(TapScreen)`
  margin: 12px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px 72px;
  margin-top: 12px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  background-color: #0DBB13;
  outline: none;
  border: 0 none;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    background-color: #0DAA12;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
  }
`;

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionsModal: React.FunctionComponent<InstructionsModalProps> = ({ isOpen, onClose }) => (
  <Wrapper isOpen={isOpen}>
    <Title>Instructions</Title>
    <Text>Tap <b>anywhere</b> in the screen to change the arrow's direction.</Text>
    <TapScreenImage />
    <Button onClick={onClose}>Got it!</Button>
  </Wrapper>
);

export default InstructionsModal;
