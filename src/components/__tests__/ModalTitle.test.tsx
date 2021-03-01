import { render } from '@testing-library/react';
import ModalTitle from '../ModalTitle';

describe('<ModalTitle />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'modal-title';

    // Act
    const { getByTestId } = render(<ModalTitle data-testid={testId} />);

    // Assert
    const element = getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('h3');
    expect(element).toHaveStyle(`
      margin: 0;
      text-transform: uppercase;
    `);
  });
});
