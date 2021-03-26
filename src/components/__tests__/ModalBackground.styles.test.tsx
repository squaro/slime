import { render } from '@testing-library/react';
import ModalBackground from '../ModalBackground.styles';

describe('<ModalBackground />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'modal-background';

    // Act
    const { getByTestId } = render(<ModalBackground data-testid={testId} />);

    // Assert
    const element = getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('div');
    expect(element).toHaveStyle(`
      width: 100%;
      height: 100%;
    `);
  });
});
