import { act, fireEvent, render, screen } from '@testing-library/react';
import strings from '../../config/strings';
import RoundScreen from '../RoundScreen';

test('renders the round screen component', () => {
  render(
    <RoundScreen />
  );

  expect(screen.queryByRole("region")).toBeInTheDocument();
});

test('toggles the direction of the round', () => {
  render(
    <RoundScreen />
  );

  const wrapper = screen.getByRole('region');
  const roundDirectionArrow = screen.getByRole('checkbox');
  expect(screen.queryByTitle(/arrow/i)).toBeInTheDocument();
  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("true");
  act(() => { fireEvent.click(wrapper); });
  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("false");
});
