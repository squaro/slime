import { ResourceLanguage, Resource } from 'i18next';

export const mapLocalesToResources = (locales: ResourceLanguage) => Object.keys(locales).reduce(
  (accumulator: Resource, key: string) => {
    accumulator[key] = {
      translation: (locales as ResourceLanguage)[key],
    };

    return accumulator;
  },
  {} as Resource,
);

export const updateDOMLanguage = (lang: string) => {
  document.documentElement.lang = lang;
};
