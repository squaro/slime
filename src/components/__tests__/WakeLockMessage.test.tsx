import { fireEvent, render, screen } from '@testing-library/react';
import WakeLockMessage from '../WakeLockMessage';

test("renders a wake lock message when it's enabled", () => {
  const enabled = true;
  const onClick = jest.fn();

  render(<WakeLockMessage isWakeLockEnabled={enabled} onClick={onClick} />);

  const messageText = screen.getByTestId('wake-lock-message');
  expect(messageText).toHaveTextContent('The screen will remain active while using the application.');
  expect(messageText).not.toHaveStyle(`color: #8F8C29;`);
});

test("renders a different wake lock message when it's disabled", () => {
  const enabled = false;
  const onClick = jest.fn();

  render(<WakeLockMessage isWakeLockEnabled={enabled} onClick={onClick} />);

  const messageText = screen.getByTestId('wake-lock-message');
  expect(messageText).toHaveTextContent('The screen will not remain active while using the application.');
  expect(messageText).toHaveStyle(`color: #8F8C29;`);
});

test('calls the on click callback when pressed the button', () => {
  const enabled = false;
  const onClick = jest.fn();

  render(<WakeLockMessage isWakeLockEnabled={enabled} onClick={onClick} />);

  const messageButton = screen.getByTestId('wake-lock-message-button');
  fireEvent.click(messageButton);
  expect(onClick).toHaveBeenCalled();
});
