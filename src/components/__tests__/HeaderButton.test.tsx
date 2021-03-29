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

  const { container } = render(
    <HeaderButton icon={icon} text={text} onClick={onClick} />
  );

  expect(screen.queryByTitle(/icon/i)).toBeInTheDocument();
  expect(screen.queryByText(/my text/i)).toBeInTheDocument();

  // TODO: Investigate how to get the parent element without using querySelector()
  const headerButton = container.querySelector('button');
  fireEvent.click(headerButton!);
  expect(onClick).toHaveBeenCalled();
});
