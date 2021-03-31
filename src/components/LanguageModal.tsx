import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from './Modal';
import languages, { Language } from '../config/languages';
import { updateDOMLanguage } from '../utils/i18n';
import LanguageItem from './LanguageItem';

const LanguagesList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0 24px 0;
`;

type AvailableLanguage = {
  code: string;
  selected: boolean;
  string: string;
};

type LanguageModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

// TODO: Test selected language
// TODO: Test changing language
function LanguageModal({ isOpen, onClose }: LanguageModalProps) {
  const { t, i18n } = useTranslation();
  const titleLabel = t('languageModal.title');
  const closeButtonLabel = t('languageModal.close');
  const name = 'language';
  const primaryColor = '#DC7E13';
  const primaryDarkColor = '#B9701C';

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
    <Modal
      closeButtonLabel={closeButtonLabel}
      isOpen={isOpen}
      name={name}
      primaryColor={primaryColor}
      primaryDarkColor={primaryDarkColor}
      titleLabel={titleLabel}
      onClose={onClose}
    >
      <LanguagesList role="list">
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
    </Modal>
  );
};

export default LanguageModal;
