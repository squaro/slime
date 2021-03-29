import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import Modal from '../Modal';

test("doesn't render the modal", () => {
  const closeButtonLabel = 'Close';
  const isOpen = false;
  const primaryColor = 'red';
  const primaryDarkColor = 'darkred';
  const titleLabel = 'Title';
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <Modal
        closeButtonLabel={closeButtonLabel}
        isOpen={isOpen}
        primaryColor={primaryColor}
        primaryDarkColor={primaryDarkColor}
        titleLabel={titleLabel}
        onClose={onClose}
      >
        Foo
      </Modal>
    </ModalProvider>
  );

  expect(screen.queryByText(/foo/i)).not.toBeInTheDocument();
});

test('renders the modal with the proper styles and children', () => {
  const closeButtonLabel = 'Close';
  const isOpen = true;
  const primaryColor = 'red';
  const primaryDarkColor = 'darkred';
  const titleLabel = 'Title';
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <Modal
        closeButtonLabel={closeButtonLabel}
        isOpen={isOpen}
        primaryColor={primaryColor}
        primaryDarkColor={primaryDarkColor}
        titleLabel={titleLabel}
        onClose={onClose}
      >
        Foo
      </Modal>
    </ModalProvider>
  );

  const dialog = screen.queryByRole('dialog');
  expect(dialog).toHaveStyle(`border-color: ${primaryColor}`);

  expect(screen.queryByText(/title/i)).toBeInTheDocument();
  expect(screen.queryByText(/foo/i)).toBeInTheDocument();

  const closeButton = screen.getByRole('button', { name: /close/i });
  expect(closeButton).toHaveStyle(`background-color: ${primaryColor};`);
});

test('calls the onClose callback when the close button is pressed', async () => {
  const closeButtonLabel = 'Close';
  const isOpen = true;
  const primaryColor = 'red';
  const primaryDarkColor = 'darkred';
  const titleLabel = 'Title';
  const onClose = jest.fn();

  render(
    <ModalProvider>
      <Modal
        closeButtonLabel={closeButtonLabel}
        isOpen={isOpen}
        primaryColor={primaryColor}
        primaryDarkColor={primaryDarkColor}
        titleLabel={titleLabel}
        onClose={onClose}
      >
        Foo
      </Modal>
    </ModalProvider>
  );

  const closeButton = screen.getByRole('button', { name: /close/i });
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
