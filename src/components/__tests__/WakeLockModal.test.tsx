import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import strings from '../../config/strings';
import WakeLockModal from '../WakeLockModal';

test("doesn't render the wake lock modal", () => {
  const isOpen = false;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <WakeLockModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog', { name: strings.WAKE_LOCK_MODAL_TITLE })).not.toBeInTheDocument();
});

test('renders the wake lock modal with all children', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <WakeLockModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog', { name: strings.WAKE_LOCK_MODAL_TITLE })).toBeInTheDocument();
  expect(screen.queryByText(strings.WAKE_LOCK_MODAL_TITLE)).toBeInTheDocument();
  expect(screen.queryByText(strings.WAKE_LOCK_MODAL_FEATURE)).toBeInTheDocument();
  expect(screen.queryByText(strings.WAKE_LOCK_MODAL_PHONE)).toBeInTheDocument();
  expect(screen.queryByText(strings.WAKE_LOCK_MODAL_SUPPORT)).toBeInTheDocument();
  expect(screen.queryByText(strings.WAKE_LOCK_MODAL_CLOSE_BUTTON)).toBeInTheDocument();
});

test('calls the onClose callback when the close button is pressed', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <WakeLockModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const closeButton = screen.getByRole('button', { name: strings.WAKE_LOCK_MODAL_CLOSE_BUTTON });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
