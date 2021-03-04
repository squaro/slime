import { render, screen } from '@testing-library/react';
import App, { Wrapper } from '../App';

describe('<Wrapper />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'wrapper';

    // Act
    render(<Wrapper data-testid={testId} />);

    // Assert
    expect(screen.getByTestId(testId)).toHaveStyle(`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #000;
    `);
  });
});

describe('<App />', (): void => {
  it('renders the Round Screen successfully', (): void => {
    // Arrange
    const testId = 'round-screen';

    // Act
    render(<App />);

    // Assert
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
