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

  expect(screen.queryByRole('dialog', { name: 'wakeLockModal.title' })).not.toBeInTheDocument();
});

test('renders the wake lock modal with all children', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <WakeLockModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog', { name: 'wakeLockModal.title' })).toBeInTheDocument();
  expect(screen.queryByText('wakeLockModal.title')).toBeInTheDocument();
  expect(screen.queryByText('wakeLockModal.feature')).toBeInTheDocument();
  expect(screen.queryByText('wakeLockModal.phone')).toBeInTheDocument();
  expect(screen.queryByText('wakeLockModal.support')).toBeInTheDocument();
  expect(screen.queryByText('wakeLockModal.close')).toBeInTheDocument();
});

test('calls the onClose callback when the close button is pressed', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <WakeLockModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const closeButton = screen.getByRole('button', { name: 'wakeLockModal.close' });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
