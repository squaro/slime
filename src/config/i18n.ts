import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, } from 'react-i18next';
import * as locales from '../locales';
import { mapLocalesToResources, updateDOMLanguage } from '../utils/i18n';

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: mapLocalesToResources(locales),
  });

// Update DOM language with current language
updateDOMLanguage(i18n.language);

export default i18n;