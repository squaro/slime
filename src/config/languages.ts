import strings from './strings';

export type Language = {
  code: string;
  string: string;
};

// List of available languages
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
