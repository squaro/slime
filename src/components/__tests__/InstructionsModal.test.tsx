import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import InstructionsModal from '../InstructionsModal';

test("doesn't render the instructions modal", () => {
  const isOpen = false;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <InstructionsModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByTestId('instructions-modal')).not.toBeInTheDocument();
});

test('renders the instructions modal', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <InstructionsModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByTestId('instructions-modal')).toBeInTheDocument();
  expect(screen.queryByTestId('instructions-modal-title')).toBeInTheDocument();
  expect(screen.queryByTestId('instructions-modal-text')).toBeInTheDocument();
  expect(screen.queryByTestId('instructions-modal-close-button')).toBeInTheDocument();
});

test('calls the on close callback when pressed the button', async () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <InstructionsModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const closeButton = screen.getByTestId('instructions-modal-close-button');
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
