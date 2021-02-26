import { render } from '@testing-library/react';
import App from '../App';

describe('App', (): void => {
  it('renders the application', (): void => {
    // Arrange
    const className = 'app';

    // Act
    render(<App />);

    // Assert
    const appElement = document.getElementsByClassName(className)[0];
    expect(appElement).not.toBeUndefined();
    expect(appElement).toHaveProperty('className');
    expect(appElement.className).toEqual(className);
  });
});
