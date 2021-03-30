import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import strings from '../../config/strings';
import InstructionsModal from '../InstructionsModal';

test("doesn't render the instructions modal", () => {
  const isOpen = false;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <InstructionsModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('renders the instructions modal with all children', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <InstructionsModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  expect(screen.queryByRole('dialog')).toBeInTheDocument();
  expect(screen.queryByText(/tap-screen.svg/i)).toBeInTheDocument();
  expect(screen.queryByText(strings.INSTRUCTIONS_MODAL_TITLE)).toBeInTheDocument();
  expect(screen.queryByText(strings.INSTRUCTIONS_MODAL_TEXT)).toBeInTheDocument();
  expect(screen.queryByText(strings.INSTRUCTIONS_MODAL_CLOSE_BUTTON)).toBeInTheDocument();
});

test('calls the onClose callback when the close button is pressed', () => {
  const isOpen = true;
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <InstructionsModal isOpen={isOpen} onClose={onClose} />
    </ModalProvider>
  );

  const closeButton = screen.getByRole('button', { name: strings.INSTRUCTIONS_MODAL_CLOSE_BUTTON });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
