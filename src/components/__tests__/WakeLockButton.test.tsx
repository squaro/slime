import { fireEvent, render, screen } from '@testing-library/react';
import WakeLockButton from '../WakeLockButton';

test('renders the wake lock button', () => {
  const onClick = jest.fn();

  render(
    <WakeLockButton onClick={onClick} />
  );

  expect(screen.queryByTestId('wake-lock-button')).toBeInTheDocument();
  expect(screen.queryByTestId('wake-lock-button-wake-lock-icon')).toBeInTheDocument();
  expect(screen.queryByTestId('wake-lock-button-separator')).toBeInTheDocument();
  expect(screen.queryByTestId('wake-lock-button-status')).toBeInTheDocument();
});

test('calls the on click callback when pressed the button', async () => {
  const onClick = jest.fn();

  render(
    <WakeLockButton onClick={onClick} />
  );

  const wakeLockButton = screen.getByTestId('wake-lock-button');
  fireEvent.click(wakeLockButton);
  expect(onClick).toHaveBeenCalled();
});
