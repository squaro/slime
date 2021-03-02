import styled from 'styled-components';

const StartButton = styled.button`
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

export default StartButton;
