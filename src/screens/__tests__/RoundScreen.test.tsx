import { act, fireEvent, render, screen } from '@testing-library/react';
import RoundScreen from '../RoundScreen';

test('renders the round screen component', () => {
  render(
    <RoundScreen />
  );

  expect(screen.queryByRole('region')).toBeInTheDocument();
  expect(screen.queryByRole('img')).toBeInTheDocument();
  
  const roundDirectionArrow = screen.getByRole('checkbox');
  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("true");
});

test('renders the round screen component and toggles the direction of the round once', () => {
  render(
    <RoundScreen />
  );
  
  const wrapper = screen.getByRole('region');
  const roundDirectionArrow = screen.getByRole('checkbox');
  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("true");
  
  // Toggle direction once
  act(() => { fireEvent.click(wrapper); });

  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("false");
});

test('renders the round screen component and toggles the direction of the round twice', () => {
  render(
    <RoundScreen />
  );
  
  const wrapper = screen.getByRole('region');
  const roundDirectionArrow = screen.getByRole('checkbox');
  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("true");
  
  // Toggle direction once
  act(() => { fireEvent.click(wrapper); });

  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("false");
  
  // Toggle direction twice
  act(() => { fireEvent.click(wrapper); });

  expect(roundDirectionArrow.getAttribute('aria-checked')).toEqual("true");
});
