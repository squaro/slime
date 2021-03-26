import styled from 'styled-components';

const ModalButton = styled.button`
  width: 100%;
  padding: 20px 72px;
  margin-top: 12px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  border: 0 none;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  &:active {
    box-shadow: 3px 3px 6px rgba(0,0,0,0.5);
  }
`;

export default ModalButton;
