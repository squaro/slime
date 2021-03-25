import { fireEvent, render, screen } from '@testing-library/react';
import LanguageButton from '../LanguageButton';

test('renders the language button with the proper language', () => {
  const onClick = jest.fn();

  // TODO: Get short language from i18n rather
  // hardcoding the value here.
  const defaultShortLanguage = 'EN';

  render(
    <LanguageButton onClick={onClick} />
  );

  expect(screen.queryByTestId('language-button')).toBeInTheDocument();
  expect(screen.queryByTestId('language-button-globe-icon')).toBeInTheDocument();
  expect(screen.queryByTestId('language-button-separator')).toBeInTheDocument();

  const shortLanguage = screen.getByTestId('language-button-short-language');
  expect(shortLanguage.textContent).toEqual(defaultShortLanguage);
});

test('calls the on click callback when pressed the button', async () => {
  const onClick = jest.fn();

  render(
    <LanguageButton onClick={onClick} />
  );

  const closeButton = screen.getByTestId('language-button');
  fireEvent.click(closeButton);
  expect(onClick).toHaveBeenCalled();
});
