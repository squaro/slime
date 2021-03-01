import { render } from '@testing-library/react';
import TapScreenImage from '../TapScreenImage';

// TODO: Add React.memo() related unit tests
describe('<TapScreenImage />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'tap-screen-image';

    // Act
    const { getByTestId } = render(<TapScreenImage data-testid={testId} />);

    // Assert
    const element = getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('svg');
    expect(element).toHaveStyle(`
      margin: 12px;
    `);
  });
});
