import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Modal from './Modal';
import flags from '../assets/flags';
import { availableLanguages } from '../config/languages';
import { updateDOMLanguage } from '../utils/i18n';

type Language = {
  code: string;
  flag: string;
  label: string;
  selected: boolean;
};

const LanguagesList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0 24px 0;
`;

const LanguageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 24px 12px;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: #DC7E133D;
  }

  &[aria-checked="true"] {
    background-color: #DC7E13;
  }
`;

const LanguageItemFlag = styled.img`
  width: 60px;
`;

const LanguageItemText = styled.label`
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
  color: #FFFFFF;
`;

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

  const languagesList: Language[] = availableLanguages.map(
    (code) => ({
      code,
      flag: flags[code],
      label: t(`lang.${code}` as const),
      selected: i18n.language.includes(code),
    })
  );

  const changeLanguage = async (code: string) => {
    // Change i18n language asynchronously
    await i18n.changeLanguage(code);

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
      <LanguagesList role="radiogroup">
        {languagesList.map(({ code, flag, label, selected }: Language, index: number) => {
          return (
            <LanguageItem
              key={code}
              role="radio"
              aria-checked={selected}
              aria-labelledby={code}
              tabIndex={!index ? 0 : -1}
              onClick={() => changeLanguage(code)}
            >
              <LanguageItemFlag
                aria-hidden="true"
                src={flag}
                alt={label}
                title={label}
              />
              <LanguageItemText id={code}>
                {label}
              </LanguageItemText>
            </LanguageItem>
          );
        })}
      </LanguagesList>
    </Modal>
  );
};

export default LanguageModal;
