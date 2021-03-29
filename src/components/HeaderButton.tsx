import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: transparent;
  border-radius: 5px;
  border: 0 none;
  outline: none;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  color: #757575;

  &:focus,
  &:hover {
    color: #BDBDBD;
  }
`;

const Separator = styled.div`
  width: 3px;
  height: 3px;
  margin: 0 6px;
  border-radius: 3px;
  background-color: #757575;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    background-color: #BDBDBD;
  }
`;

type HeaderButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
};

function HeaderButton({ icon, text, onClick }: HeaderButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      {icon}
      <Separator />
      {text}
    </Wrapper>
  );
}

export default HeaderButton;
