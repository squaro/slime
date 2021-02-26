import { render } from '@testing-library/react';
import SlimSpinArrow from '../SlimSpinArrow';

// TODO: Add React.memo() related unit tests
describe('SlimSpinArrow', (): void => {
  it('renders the slim spin arrow component', (): void => {
    // Act
    const { getByText } = render(<SlimSpinArrow />);

    // Assert
    const svgElement = getByText(/slim-spin-arrow.svg/i);
    expect(svgElement).toBeInTheDocument();
  });
});
