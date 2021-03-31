import styled, { css } from 'styled-components';

type WrapperProps = {
  $selected?: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 24px 12px;
  cursor: pointer;

  &:hover {
    background-color: #DC7E133D;
  }

  ${({ $selected }) => $selected && css`
    // TODO: use a11y selectors to override background
    && {
      background-color: #DC7E13;
    }
  `}
`;

const LanguageFlag = styled.img`
  width: 60px;
`;

const LanguageText = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
  color: #FFFFFF;
`;

type LanguageItemProps = {
  code: string;
  flag: string;
  label: string;
  selected: boolean;
  onClick: () => void;
};

function LanguageItem({ code, flag, label, selected, onClick }: LanguageItemProps) {
  return (
    <Wrapper
      role="listitem"
      $selected={selected}
      data-testid={`language-modal-language-${code.toLowerCase()}`}
      onClick={onClick}
    >
      <LanguageFlag src={flag} alt={label} title={label} />
      <LanguageText>
        {label}
      </LanguageText>
    </Wrapper>
  );
}

export default LanguageItem;
