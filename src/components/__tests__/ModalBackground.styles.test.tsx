import { render, screen } from '@testing-library/react';
import ModalBackground from '../ModalBackground.styles';

test('renders the modal background with the proper styles', (): void => {
  const testId = 'modal-background';

  render(
    <ModalBackground data-testid={testId} />
  );

  expect(screen.getByTestId(testId)).toHaveStyle(`
    width: 100%;
    height: 100%;
  `);
});
