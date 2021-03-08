import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Wrapper = Modal.styled`
  width: 80vmin;
  max-width: 288px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  border: 2px solid #0D58BB;
  border-radius: 15px;
`;

export const Title = styled.h3`
  margin-top: 0;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin-top: 0;
  text-align: left;
`;

export const Clarification = styled.p`
  margin-top: 0;
  font-size: 12px;
  font-style: italic;
  text-align: left;
  color: #9E9E9E;
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px 72px;
  margin-top: 12px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  background-color: #0D58BB;
  outline: none;
  border: 0 none;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    background-color: #104D9E;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
  }
`;

interface WakeLockProps {
  isOpen: boolean;
  onClose: () => void;
}

const WakeLock: React.FunctionComponent<WakeLockProps> = ({ isOpen, onClose }) => (
  <Wrapper isOpen={isOpen}>
    <Title>Wake Lock</Title>
    <Text>The Wake Lock feature prevents the device from <b>dimming</b> and <b>locking</b> the screen while using the application.</Text>
    <Text>You can determine whether your phone allows this feature or not by looking at the bottom of the screen</Text>
    <Clarification>If your phone doesn't allow the wake lock feature, soon you will be able to report the issue.</Clarification>
    <Button onClick={onClose}>Close</Button>
  </Wrapper>
);

export default WakeLock;