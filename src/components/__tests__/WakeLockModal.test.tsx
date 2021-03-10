import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import WakeLockModal from '../WakeLockModal';

test("doesn't render the wake lock modal", () => {
  const isOpen = false;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <WakeLockModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByTestId('wake-lock-modal')).not.toBeInTheDocument();
});

test('renders the wake lock modal', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <WakeLockModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByTestId('wake-lock-modal')).toBeInTheDocument();
  expect(screen.queryByTestId('wake-lock-modal-feature-text')).toBeInTheDocument();
  expect(screen.queryByTestId('wake-lock-modal-phone-text')).toBeInTheDocument();
  expect(screen.queryByTestId('wake-lock-modal-clarification-text')).toBeInTheDocument();
  expect(screen.queryByTestId('wake-lock-modal-button')).toBeInTheDocument();
});

test('calls the on close callback when pressed the button', async () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <WakeLockModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const modalButton = screen.getByTestId('wake-lock-modal-button');
  fireEvent.click(modalButton);
  expect(onClose).toHaveBeenCalled();
});
