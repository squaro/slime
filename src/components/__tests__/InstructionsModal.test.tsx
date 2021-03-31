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

  expect(screen.queryByRole('dialog', { name: 'instructionsModal.title' })).not.toBeInTheDocument();
});

test('renders the instructions modal with all children', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <InstructionsModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog', { name: 'instructionsModal.title' })).toBeInTheDocument();
  expect(screen.queryByText(/tap-screen.svg/i)).toBeInTheDocument();
  expect(screen.queryByText('instructionsModal.title')).toBeInTheDocument();
  expect(screen.queryByText('instructionsModal.instructions')).toBeInTheDocument();
  expect(screen.queryByText('instructionsModal.close')).toBeInTheDocument();
});

test('calls the onClose callback when the close button is pressed', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <InstructionsModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const closeButton = screen.getByRole('button', { name: 'instructionsModal.close' });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
