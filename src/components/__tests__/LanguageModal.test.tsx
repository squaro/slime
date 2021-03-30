import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import languages from '../../config/languages';
import strings from '../../config/strings';
import LanguageModal from '../LanguageModal';

test("doesn't render the language modal", () => {
  const isOpen = false;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog', { name: strings.LANGUAGE_MODAL_TITLE })).not.toBeInTheDocument();
});

test('renders the language modal with all available languages', async () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog', { name: strings.LANGUAGE_MODAL_TITLE })).toBeInTheDocument();
  expect(screen.queryByRole('list')).toBeInTheDocument();
  expect(screen.queryByText(strings.LANGUAGE_MODAL_TITLE)).toBeInTheDocument();
  expect(screen.queryByText(strings.LANGUAGE_MODAL_CLOSE_BUTTON)).toBeInTheDocument();

  // Verify that all languages are displayed
  const availableLanguages = await screen.findAllByRole('listitem');
  expect(availableLanguages.length).toEqual(languages.length);
});

test('calls the onClose callback when the close button is pressed', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const closeButton = screen.getByRole('button', { name: strings.LANGUAGE_MODAL_CLOSE_BUTTON });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
