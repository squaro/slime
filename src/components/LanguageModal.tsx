import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import languages, { Language } from '../config/languages';
import strings from '../config/strings';
import { updateDOMLanguage } from '../utils/i18n';
import LanguageItem from './LanguageItem';
import ModalBase from './ModalBase.styles';
import ModalButton from './ModalButton.styles';
import ModalTitle from './ModalTitle.styles';

const ModalStyles = styled(ModalBase)`
  border-color: #DC7E13;
`;

const LanguagesList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0 24px 0;
`;

const ModalCloseButton = styled(ModalButton)`
  background-color: #DC7E13;

  &:active {
    background-color: #B9701C;
  }
`;

type LanguageModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type AvailableLanguage = {
  code: string;
  selected: boolean;
  string: string;
};

// TODO: Test selected language
// TODO: Test changing language
function LanguageModal({ isOpen, onClose }: LanguageModalProps) {
  const { t, i18n } = useTranslation();
  const titleText = t(strings.LANGUAGE_MODAL_TITLE);
  const closeButtonText = t(strings.LANGUAGE_MODAL_CLOSE_BUTTON);

  const availableLanguages: AvailableLanguage[] = languages.map(
    (language: Language) => ({
      ...language,
      selected: language.code === i18n.language,
    })
  );

  const changeLanguage = async (lang: string) => {
    // Change i18n language asynchronously
    await i18n.changeLanguage(lang);

    // Update DOM language afterward
    updateDOMLanguage(i18n.language);
  };

  return (
    <Modal isOpen={isOpen} data-testid="language-modal">
      <ModalStyles>
        <ModalTitle data-testid="language-modal-title">
          {titleText}
        </ModalTitle>
        <LanguagesList data-testid="language-modal-languages-list">
          {availableLanguages.map(({ code, selected, string }: AvailableLanguage) => (
            <LanguageItem
              key={code}
              code={code}
              selected={selected}
              string={string}
              onClick={() => changeLanguage(code)}
            />
          ))}
        </LanguagesList>
        <ModalCloseButton onClick={onClose} data-testid="language-modal-close-button">
          {closeButtonText}
        </ModalCloseButton>
      </ModalStyles>
    </Modal>
  );
};

export default LanguageModal;
