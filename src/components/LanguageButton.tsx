import { Globe } from '@styled-icons/bootstrap/Globe';
import { useTranslation } from 'react-i18next';
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

const GlobeIcon = styled(Globe)`
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

const Language = styled.span`
  color: #757575;
  font-size: 12px;

  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    color: #BDBDBD;
  }
`;

type LanguageButtonProps = {
  onClick: () => void;
};

function LanguageButton({ onClick }: LanguageButtonProps) {
  const { i18n } = useTranslation();
  const shortLanguage = i18n.language.substr(0, 2).toUpperCase();

  return (
    <Wrapper onClick={onClick} data-testid="language-button">
      <GlobeIcon size="16" data-testid="language-button-globe-icon" />
      <Separator data-testid="language-button-separator" />
      <Language data-testid="language-button-short-language">
        {shortLanguage}
      </Language>
    </Wrapper>
  );
}

export default LanguageButton;
