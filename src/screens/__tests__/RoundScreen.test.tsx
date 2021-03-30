import { render, screen } from '@testing-library/react';
import RoundScreen from '../RoundScreen';

test('renders the round screen component', () => {
  render(
    <RoundScreen />
  );

  expect(screen.queryByText(/slim-spin-arrow.svg/i)).toBeInTheDocument();
});
