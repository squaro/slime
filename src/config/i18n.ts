import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, es } from '../locales';

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
      es: {
        translation: es,
      },
    },
  });

export default i18n;