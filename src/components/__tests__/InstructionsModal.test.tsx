import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import InstructionsModal, { Button, TapScreenImage, Text, Title, Wrapper } from '../InstructionsModal';

describe('<Wrapper />', (): void => {
  const testId = 'wrapper';

  it('doesn\'t render the component', (): void => {
    // Arrange
    const isOpen = false;

    // Act
    render(
      <ModalProvider>
        <Wrapper isOpen={isOpen} data-testid={testId} />
      </ModalProvider>
    );

    // Assert
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument()
  });

  it('renders the component successfully', (): void => {
    // Arrange
    const isOpen = true;

    // Act
    render(
      <ModalProvider>
        <Wrapper isOpen={isOpen} data-testid={testId} />
      </ModalProvider>
    );

    // Assert
    const element = screen.getByTestId(testId);
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

describe('<Title />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'title';

    // Act
    render(<Title data-testid={testId} />);

    // Assert
    const element = screen.getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('h3');
    expect(element).toHaveStyle(`
      margin: 0;
      text-transform: uppercase;
    `);
  });
});

describe('<Text />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'text';

    // Act
    render(<Text data-testid={testId} />);

    // Assert
    const element = screen.getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('p');
    expect(element).toHaveStyle(`
      text-align: center;
      padding: 0 32px;
    `);
  });
});

describe('<TapScreenImage />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'tap-screen-image';

    // Act
    render(<TapScreenImage data-testid={testId} />);

    // Assert
    const element = screen.getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('svg');
    expect(element).toHaveStyle(`
      margin: 12px;
    `);
  });
});

// TODO: Test :active selector
describe('<Button />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'button';

    // Act
    render(<Button data-testid={testId} />);

    // Assert
    const element = screen.getByTestId(testId);
    expect(element.tagName.toLowerCase()).toEqual('button');
    expect(element).toHaveStyle(`
      width: 100%;
      padding: 20px 72px;
      margin-top: 12px;
      border-radius: 10px;
      box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
      background-color: #0DBB13;
      outline: none;
      border: 0 none;
      font-weight: bold;
      font-size: 16px;
      color: #FFFFFF;
      text-transform: uppercase;
      cursor: pointer;
    `);
  });
});

describe('<InstructionsModal />', (): void => {
  it('doesn\'t render the component', (): void => {
    // Arrange
    const isOpen = false;
    const onClose = jest.fn();

    // Act
    render(
      <ModalProvider>
        <InstructionsModal isOpen={isOpen} onClose={onClose} />
      </ModalProvider>
    );

    // Assert
    expect(screen.queryByText(/instructions/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/to change the arrow's direction/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/tap-screen.svg/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/got it!/i)).not.toBeInTheDocument();
  });

  it('renders the component successfully', (): void => {
    // Arrange
    const isOpen = true;
    const onClose = jest.fn();

    // Act
    render(
      <ModalProvider>
        <InstructionsModal isOpen={isOpen} onClose={onClose} />
      </ModalProvider>
    );

    // Assert
    expect(screen.queryByText(/instructions/i)).toBeInTheDocument();
    expect(screen.queryByText(/to change the arrow's direction/i)).toBeInTheDocument();
    expect(screen.queryByText(/tap-screen.svg/i)).toBeInTheDocument();
    expect(screen.queryByText(/got it!/i)).toBeInTheDocument();
  });

  it('calls the onClose callback', (): void => {
    // Arrange
    const isOpen = true;
    const onClose = jest.fn();

    // Act
    render(
      <ModalProvider>
        <InstructionsModal isOpen={isOpen} onClose={onClose} />
      </ModalProvider>
    );
    fireEvent.click(screen.getByText(/got it!/i));

    // Assert
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
