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
`;

const Icon = styled.span`
  color: #757575;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    color: #BDBDBD;
  }
`;

const Separator = styled.div`
  width: 3px;
  height: 3px;
  margin: 0 6px;
  background-color: #757575;
  border-radius: 3px;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    background-color: #BDBDBD;
  }
`;

const Text = styled.span`
  color: #757575;
  font-size: 12px;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    color: #BDBDBD;
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
      <Icon>{icon}</Icon>
      <Separator />
      <Text>{text}</Text>
    </Wrapper>
  );
}

export default HeaderButton;
