import { updateDOMLanguage } from '../i18n';

describe('updateDOMLanguage()', () => {
  test('should update the DOM language properly', () => {
    const language = 'en-US';

    updateDOMLanguage(language);

    expect(document.documentElement).toHaveProperty('lang');
    expect(document.documentElement.lang).toEqual(language);
  });
});
