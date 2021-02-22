import { render } from '@testing-library/react';
import GlobalStyles from './GlobalStyles';

describe('GlobalStyles', (): void => {
  it('should load global styles', (): void => {
    // Act
    render(<GlobalStyles />);

    // Assert
    expect(document.head).toMatchSnapshot();
  });
});
