import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { updateDOMLanguage } from '../utils/i18n';
import { availableLanguages, defaultLanguage } from './languages';
import translationEn from './locales/en/translation.json';
import translationEs from './locales/es/translation.json';

// Define resources
export const resources = {
  en: {
    translation: translationEn,
  },
  es: {
    translation: translationEs,
  },
} as const;

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
    supportedLngs: (availableLanguages as unknown) as string[],
    nonExplicitSupportedLngs: true,
  });

// Update DOM language with current language
updateDOMLanguage(i18n.language);

export default i18n;