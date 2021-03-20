import i18n from 'i18next';
import { initReactI18next, } from 'react-i18next';
import * as locales from '../locales';
import { mapLocalesToResources } from '../utils/i18n';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: mapLocalesToResources(locales),
  });

export default i18n;