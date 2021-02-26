import { render } from '@testing-library/react';
import GreenButton from '../GreenButton';

// TODO: Test hover case
describe('GreenButton', (): void => {
  it('should load green button component', (): void => {
    // Act
    render(<GreenButton />);

    // Assert
    expect(document.body).toMatchSnapshot();
  });
});
