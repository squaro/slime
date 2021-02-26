import { render } from '@testing-library/react';
import Screen from '../Screen';

describe('Screen', (): void => {
  it('renders the screen component', (): void => {
    // Arrange
    const screenTestId = 'screen';

    // Act
    const { getByTestId } = render(<Screen data-testid={screenTestId} />);

    // Assert
    const screenElement = getByTestId(screenTestId);
    expect(screenElement).toHaveStyle(`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `);
  });
});
