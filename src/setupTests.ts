// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        language: 'en-US',
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  // this mock makes sure any Trans component returns their children or null to prevent test errors
  Trans: ({ children }: React.PropsWithChildren<unknown>) => children || null,
}));
