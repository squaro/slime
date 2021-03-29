import { fireEvent, render, screen } from '@testing-library/react';
import HeaderButton from '../HeaderButton';

test('renders the header button and calls the onClick callback after the button is pressed', () => {
  const icon = (
    <svg>
      <title>Icon</title>
    </svg>
  );
  const text = 'My text';
  const onClick = jest.fn();

  render(
    <HeaderButton icon={icon} text={text} onClick={onClick} />
  );

  // Check for icon
  expect(screen.queryByTitle(/icon/i)).toBeInTheDocument();

  // Check for button & text simultaneously
  const headerButton = screen.getByRole('button', { name: /my text/i });
  fireEvent.click(headerButton);
  expect(onClick).toHaveBeenCalled();
});
