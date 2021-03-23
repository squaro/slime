import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import languages from '../../config/languages';
import LanguageModal from '../LanguageModal';

test("doesn't render the language modal", () => {
  const isOpen = false;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByTestId('language-modal')).not.toBeInTheDocument();
});

test('renders the language modal with the available languages', async () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByTestId('language-modal')).toBeInTheDocument();
  expect(screen.queryByTestId('language-modal-title')).toBeInTheDocument();
  expect(screen.queryByTestId('language-modal-languages-list')).toBeInTheDocument();
  expect(screen.queryByTestId('language-modal-close-button')).toBeInTheDocument();

  // Verify that all languages are displayed
  const availableLanguages = await screen.findAllByTestId(/(language-modal-language-)(.*)/);
  expect(availableLanguages.length).toEqual(languages.length);
});

test('calls the on close callback when pressed the button', async () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const closeButton = screen.getByTestId('language-modal-close-button');
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
