export type Language = {
  code: string;
  string: string;
};

// List of languages
const languages: Language[] = [
  {
    code: 'en-US',
    string: 'lang.en-US',
  },
  {
    code: 'es-ES',
    string: 'lang.es-ES',
  },
];

// Default language
export const defaultLanguage = 'en-US';

export default languages;
