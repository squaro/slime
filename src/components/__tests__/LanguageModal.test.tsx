import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import { availableLanguages } from '../../config/languages';
import LanguageModal from '../LanguageModal';

test("doesn't render the language modal", () => {
  const isOpen = false;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog', { name: 'languageModal.title' })).not.toBeInTheDocument();
});

test('renders the language modal with all available languages', async () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog', { name: 'languageModal.title' })).toBeInTheDocument();
  expect(screen.queryByRole('radiogroup')).toBeInTheDocument();
  expect(screen.queryByText('languageModal.title')).toBeInTheDocument();
  expect(screen.queryByText('languageModal.close')).toBeInTheDocument();

  // Verify that all languages are displayed
  const languageListItems = await screen.findAllByRole('radio');
  expect(languageListItems.length).toEqual(availableLanguages.length);
});

test('calls the onClose callback when the close button is pressed', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <LanguageModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const closeButton = screen.getByRole('button', { name: 'languageModal.close' });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
