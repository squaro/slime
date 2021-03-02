import { render } from '@testing-library/react';
import ModalBackground from '../ModalBackground';

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
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0,0,0,0.5);
      z-index: 30;
    `);
  });
});
