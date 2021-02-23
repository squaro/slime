import { fireEvent, render } from '@testing-library/react';
import * as RoundContext from '../../contexts/RoundContext';
import RoundScreen from '../RoundScreen';

// Spied variables
const useRoundDispatchSpy = jest.spyOn(RoundContext, 'useRoundDispatch');

// Context variables
const { RoundProvider } = RoundContext;

describe('RoundScreen', (): void => {
  afterEach((): void => {
    useRoundDispatchSpy.mockReset();
  });

  it('renders the round screen component', (): void => {
    // Arrange
    const dispatch = jest.fn();
    useRoundDispatchSpy.mockReturnValueOnce(dispatch);
  
    // Act
    const { getByText } = render(
      <RoundProvider>
        <RoundScreen />
      </RoundProvider>
    );
  
    // Assert
    const svgElement = getByText(/slim-spin-arrow.svg/i);
    expect(svgElement).toBeInTheDocument();
  });
  
  it('renders the round screen component and clicks the screen', (): void => {
    // Arrange
    const dispatch = jest.fn();
    useRoundDispatchSpy.mockReturnValueOnce(dispatch);
  
    // Act
    const { getByText } = render(
      <RoundProvider>
        <RoundScreen />
      </RoundProvider>
    );
    const svgElement = getByText(/slim-spin-arrow.svg/i);
    fireEvent.click(svgElement);
  
    // Assert
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ type: 'TOGGLE' });
  });
});
