import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: en,
      },
    },
  });

export default i18n;