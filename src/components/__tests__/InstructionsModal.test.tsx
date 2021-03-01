import { render } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import InstructionsModal from '../InstructionsModal';

describe('<InstructionsModal />', (): void => {
  const testId = 'instruction-modal';

  it('doesn\'t render the component', (): void => {
    // Arrange
    const isOpen = false;

    // Act
    const { getByTestId } = render(
      <ModalProvider>
        <InstructionsModal isOpen={isOpen} data-testid={testId} />
      </ModalProvider>
    );

    // Assert
    expect(() => getByTestId(testId)).toThrowError();
  });

  it('renders the component successfully', (): void => {
    // Arrange
    const isOpen = true;

    // Act
    const { getByTestId } = render(
      <ModalProvider>
        <InstructionsModal isOpen={isOpen} data-testid={testId} />
      </ModalProvider>
    );

    // Assert
    const element = getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('div');
    expect(element).toHaveStyle(`
      width: 80vmin;
      max-width: 288px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #424242;
      border: 2px solid #0DBB13;
      border-radius: 15px;
    `);
  });
});
