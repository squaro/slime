import { render } from '@testing-library/react';
import StartButton from '../StartButton';

// TODO: Test :active selector
describe('<StartButton />', (): void => {
  it('renders the component successfully', (): void => {
    // Arrange
    const testId = 'start-button';

    // Act
    const { getByTestId } = render(<StartButton data-testid={testId} />);

    // Assert
    const element = getByTestId(testId);
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
