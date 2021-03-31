import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from './Modal';
import flags from '../assets/flags';
import { availableLanguages } from '../config/languages';
import { updateDOMLanguage } from '../utils/i18n';
import LanguageItem from './LanguageItem';

const LanguagesList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0 24px 0;
`;

type Language = {
  code: string;
  flag: string;
  label: string;
  selected: boolean;
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

  const languages: Language[] = availableLanguages.map(
    (code) => ({
      code,
      flag: flags[code],
      label: t(`lang.${code}` as const),
      selected: i18n.language.includes(code),
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
        {languages.map(({ code, flag, label, selected }: Language) => (
          <LanguageItem
            key={code}
            code={code}
            flag={flag}
            label={label}
            selected={selected}
            onClick={() => changeLanguage(code)}
          />
        ))}
      </LanguagesList>
    </Modal>
  );
};

export default LanguageModal;
