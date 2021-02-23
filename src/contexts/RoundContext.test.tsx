import { render } from '@testing-library/react';
import React from 'react';
import * as RoundContext from './RoundContext';
import { RoundAction, RoundDispatch, RoundState } from './RoundContext';

// Spied variables
const useContextSpy = jest.spyOn(React, 'useContext');
const useReducerSpy = jest.spyOn(React, 'useReducer');

// Context variables
const {
  RoundDispatchContext,
  RoundStateContext,
  RoundProvider,
  roundInitialState,
  roundReducer,
  useRoundDispatch,
  useRoundState } = RoundContext;

describe('RoundContext', (): void => {
  describe('RoundProvider', (): void => {
    afterEach((): void => {
      useReducerSpy.mockReset();
    });

    it('returns children wrapped with the context providers', (): void => {
      // Arrange
      const state: RoundState = {
        direction: false,
      };
      const dispatch: RoundDispatch = jest.fn();
      const reducer: [RoundState, RoundDispatch] = [state, dispatch];
      useReducerSpy.mockReturnValueOnce(reducer);

      // Act
      const { getByText } = render(
        <RoundProvider>
          <span>Children</span>
        </RoundProvider>
      );

      // Assert
      const textElement = getByText(/Children/i);
      expect(textElement).toBeInTheDocument();
      expect(useReducerSpy).toHaveBeenCalledTimes(1);
      expect(useReducerSpy).toHaveBeenCalledWith(roundReducer, roundInitialState);
    });
  });

  describe('roundReducer', (): void => {
    it('throws an error when the action is unhandled', (): void => {
      // Arrange
      const state: RoundState = {
        direction: false,
      };
      const action: RoundAction = ({
        type: 'TEST',
      } as unknown) as RoundAction;

      // Act & Assert
      expect(() => roundReducer(state, action)).toThrowError();
    });

    it('toggles the direction from right to left', (): void => {
      // Arrange
      const state: RoundState = {
        direction: true,
      };
      const action: RoundAction = {
        type: 'TOGGLE',
      };

      // Act
      const result: RoundState = roundReducer(state, action);

      // Assert
      expect(state).toHaveProperty('direction');
      expect(state.direction).toBe(true);
      expect(result).toHaveProperty('direction');
      expect(result.direction).toBe(false);
    });

    it('toggles the direction from left to right', (): void => {
      // Arrange
      const state: RoundState = {
        direction: false,
      };
      const action: RoundAction = {
        type: 'TOGGLE',
      };

      // Act
      const result: RoundState = roundReducer(state, action);

      // Assert
      expect(state).toHaveProperty('direction');
      expect(state.direction).toBe(false);
      expect(result).toHaveProperty('direction');
      expect(result.direction).toBe(true);
    });
  });

  describe('useRoundState', (): void => {
    afterEach((): void => {
      useContextSpy.mockReset();
    });

    it('throws an error when the context is undefined', (): void => {
      // Arrange
      useContextSpy.mockReturnValueOnce(undefined);
      
      // Act
      let error;
      try {
        useRoundState();
      } catch (err) {
        error = err;
      }

      // Assert
      expect(error).not.toBeUndefined();
      expect(useContextSpy).toHaveBeenCalledTimes(1);
      expect(useContextSpy).toHaveBeenCalledWith(RoundStateContext);
    });

    it('returns the state properly', (): void => {
      // Arrange
      const state: RoundState = {
        direction: true,
      };
      useContextSpy.mockReturnValueOnce(state);

      // Act
      const result: RoundState = useRoundState();

      // Assert
      expect(useContextSpy).toHaveBeenCalledTimes(1);
      expect(useContextSpy).toHaveBeenCalledWith(RoundStateContext);
      expect(result).toHaveProperty('direction');
      expect(result.direction).toBe(true);
    });
  });

  describe('useRoundDispatch', (): void => {
    afterEach((): void => {
      useContextSpy.mockReset();
    });

    it('throws an error when the context is undefined', (): void => {
      // Arrange
      useContextSpy.mockReturnValueOnce(undefined);
      
      // Act
      let error;
      try {
        useRoundDispatch();
      } catch (err) {
        error = err;
      }

      // Assert
      expect(error).not.toBeUndefined();
      expect(useContextSpy).toHaveBeenCalledTimes(1);
      expect(useContextSpy).toHaveBeenCalledWith(RoundDispatchContext);
    });

    it('returns the dispatch properly', (): void => {
      // Arrange
      const dispatch: RoundDispatch = jest.fn();
      useContextSpy.mockReturnValueOnce(dispatch);

      // Act
      const result: RoundDispatch = useRoundDispatch();

      // Assert
      expect(useContextSpy).toHaveBeenCalledTimes(1);
      expect(useContextSpy).toHaveBeenCalledWith(RoundDispatchContext);
      expect(result).toEqual(dispatch);
    });

    it('dispatches the actions properly', (): void => {
      // Arrange
      const dispatch: RoundDispatch = jest.fn();
      const action: RoundAction = { type: 'TOGGLE' };
      useContextSpy.mockReturnValueOnce(dispatch);

      // Act
      const result: RoundDispatch = useRoundDispatch();
      result(action);

      // Assert
      expect(useContextSpy).toHaveBeenCalledTimes(1);
      expect(useContextSpy).toHaveBeenCalledWith(RoundDispatchContext);
      expect(result).toHaveBeenCalledTimes(1);
      expect(result).toHaveBeenCalledWith(action);
    });
  });
});
