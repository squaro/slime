import 'react-i18next';
import { resources } from '../../src/config/i18n';

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];

  interface Resources extends DefaultResources {}
}
