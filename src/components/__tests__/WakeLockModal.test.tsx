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
  expect(screen.getByTestId('wake-lock-modal-feature-text')).toHaveTextContent('The Wake Lock feature prevents the device from dimming and locking the screen while using the application.');
  expect(screen.getByTestId('wake-lock-modal-phone-text')).toHaveTextContent('You can determine whether your phone allows this feature or not by looking at the bottom of the screen.');
  expect(screen.getByTestId('wake-lock-modal-clarification')).toHaveTextContent('If your phone doesn\'t allow the wake lock feature, soon you will be able to report the issue.');
  expect(screen.getByTestId('wake-lock-modal-button')).toHaveTextContent('Close');
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
