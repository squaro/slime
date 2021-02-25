import { render } from '@testing-library/react';
import Screen from '../Screen';

describe('Screen', (): void => {
  it('renders the screen component', (): void => {
    // Act
    render(<Screen />);

    // Assert
    expect(document.body).toMatchSnapshot();
  });
});
