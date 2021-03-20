import { Resource } from 'i18next';
import { mapLocalesToResources } from '../i18n';

test('should map a single locale to resources properly', (): void => {
  const en = {
    FOO: 'foo',
    BAR: 'bar',
  };
  const locales = {
    en,
  };

  const resources: Resource = mapLocalesToResources(locales);

  expect(resources).toHaveProperty('en');
  expect(resources.en).toHaveProperty('translation');
  expect(resources.en.translation).toMatchObject(en);
});

test('should map multiple locales to resources properly', (): void => {
  const en = {
    FOO: 'foo',
    BAR: 'bar',
  };
  const es = {
    BAZ: 'foo',
    QUX: 'qux',
  };
  const locales = {
    en,
    es,
  };

  const resources: Resource = mapLocalesToResources(locales);

  expect(resources).toHaveProperty('en');
  expect(resources.en).toHaveProperty('translation');
  expect(resources.en.translation).toMatchObject(en);
  expect(resources).toHaveProperty('es');
  expect(resources.es).toHaveProperty('translation');
  expect(resources.es.translation).toMatchObject(es);
});
