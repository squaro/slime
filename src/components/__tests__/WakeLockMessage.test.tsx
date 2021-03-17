import { fireEvent, render, screen } from '@testing-library/react';
import WakeLockMessage from '../WakeLockMessage';

test("renders a grayed wake lock message when it's enabled", () => {
  const enabled = true;
  const onClick = jest.fn();

  render(<WakeLockMessage isWakeLockEnabled={enabled} onClick={onClick} />);

  expect(screen.getByTestId('wake-lock-message')).not.toHaveStyle(`color: #8F8C29;`);
});

test("renders a highlighted wake lock message when it's disabled", () => {
  const enabled = false;
  const onClick = jest.fn();

  render(<WakeLockMessage isWakeLockEnabled={enabled} onClick={onClick} />);

  expect(screen.getByTestId('wake-lock-message')).toHaveStyle(`color: #8F8C29;`);
});

test('calls the on click callback when pressed the button', () => {
  const enabled = false;
  const onClick = jest.fn();

  render(<WakeLockMessage isWakeLockEnabled={enabled} onClick={onClick} />);
  
  fireEvent.click(screen.getByTestId('wake-lock-message-button'));
  expect(onClick).toHaveBeenCalled();
});
