import strings from './strings';

// Default
export const defaultLanguage = 'en-US';

export type Language = {
  code: string;
  string: string;
};

// List of languages
const languages: Language[] = [
  {
    code: 'en-US',
    string: strings.LANG_EN_US,
  },
  {
    code: 'es-ES',
    string: strings.LANG_ES_ES,
  },
];

export default languages;
