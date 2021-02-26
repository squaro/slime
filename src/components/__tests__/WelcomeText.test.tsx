import { render } from '@testing-library/react';
import WelcomeText from '../WelcomeText';

describe('WelcomeText', (): void => {
  it('should load welcome text component', (): void => {
    // Act
    render(<WelcomeText />);

    // Assert
    expect(document.body).toMatchSnapshot();
  });
});
