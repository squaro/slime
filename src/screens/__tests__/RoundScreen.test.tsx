import { act, fireEvent, render, screen } from '@testing-library/react';
import RoundScreen from '../RoundScreen';

test('renders the round screen component and toggles the direction of the round', () => {
  render(
    <RoundScreen />
  );

  expect(screen.queryByTitle(/arrow/i)).toBeInTheDocument();
  
  const roundDirectionArrow = screen.getByRole('checkbox');
  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("true");
  
  // Toggle direction
  const wrapper = screen.getByRole('region');
  act(() => { fireEvent.click(wrapper); });

  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("false");
});
