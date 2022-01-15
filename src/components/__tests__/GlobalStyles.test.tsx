import { render } from '@testing-library/react';
import GlobalStyles from '../GlobalStyles';

/**
 * TODO: Apparently, assertion below doesn't work anymore as document.head returns empty <head /> tag
 * 
 * Relevant issues:
 * - https://github.com/styled-components/jest-styled-components/issues/232
 * - https://github.com/styled-components/jest-styled-components/issues/324
 */
describe.skip('GlobalStyles', (): void => {
  it('should load global styles', (): void => {
    // Act
    render(<GlobalStyles />);

    // Assert
    expect(document.head).toMatchSnapshot();
  });
});
