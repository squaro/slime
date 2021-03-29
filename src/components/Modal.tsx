import styled from 'styled-components';
import StyledReactModal from 'styled-react-modal';

type ModalStylesProps = {
  borderColor: string;
};

const ModalStyles = styled.div<ModalStylesProps>`
  width: 80vmin;
  max-width: 288px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 15px;
  user-select: none;
`;

const Title = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type CloseButtonProps = {
  backgroundColor: string;
  backgroundActiveColor: string;
};

const CloseButton = styled.button<CloseButtonProps>`
  width: 100%;
  padding: 20px 72px;
  margin-top: 12px;
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  border: 0 none;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  &:active {
    background-color: ${({ backgroundActiveColor }) => backgroundActiveColor};
    box-shadow: 3px 3px 6px rgba(0,0,0,0.5);
  }
`;

type ModalProps = {
  children: React.ReactNode;
  closeButtonLabel: string;
  isOpen: boolean;
  primaryColor: string;
  primaryDarkColor: string;
  titleLabel: string;
  onClose: () => void;
};

// TODO: Add missing accessibility attributes (aria-labelledby / aria-describedby)
// TODO: Test close button :active selector
function Modal({
  children,
  closeButtonLabel,
  isOpen,
  primaryColor,
  primaryDarkColor,
  titleLabel,
  onClose
}: ModalProps) {
  return (
    <StyledReactModal isOpen={isOpen}>
      <ModalStyles borderColor={primaryColor} role="dialog">
        <Title>
          {titleLabel}
        </Title>
        <Content>
          {children}
        </Content>
        <CloseButton
          backgroundColor={primaryColor}
          backgroundActiveColor={primaryDarkColor}
          onClick={onClose}
        >
          {closeButtonLabel}
        </CloseButton>
      </ModalStyles>
    </StyledReactModal>
  );
};

export default Modal;
