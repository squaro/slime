import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

// TODO: Investigate how to load flags dynamically
import flags from '../assets/flags';

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
  selected: boolean;
  string: string;
  onClick: () => void;
};

function LanguageItem({ code, selected, string, onClick }: LanguageItemProps) {
  const { t } = useTranslation();
  const languageFlag = flags[code];
  const languageText = t(string);

  return (
    <Wrapper
      $selected={selected}
      data-testid={`language-modal-language-${code.toLowerCase()}`}
      onClick={onClick}
    >
      <LanguageFlag src={languageFlag} alt={languageText} title={languageText} />
      <LanguageText>{languageText}</LanguageText>
    </Wrapper>
  );
}

export default LanguageItem;
