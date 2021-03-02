import { render } from '@testing-library/react';
import ModalText from '../ModalText';

describe('<ModalText />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'modal-text';

    // Act
    const { getByTestId } = render(<ModalText data-testid={testId} />);

    // Assert
    const element = getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('p');
    expect(element).toHaveStyle(`
      text-align: center;
      padding: 0 32px;
    `);
  });
});
