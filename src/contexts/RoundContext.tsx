import { createContext, PropsWithChildren, useContext, useReducer } from 'react';

// Types
export type RoundAction = { type: 'TOGGLE' };
export type RoundDispatch = React.Dispatch<RoundAction>;
export type RoundState = {
  direction: boolean;
};
export type RoundContext = RoundState & {
  toggleDirection: () => void;
};

// Contexts
export const RoundStateContext = createContext<RoundState | undefined>(undefined);
export const RoundDispatchContext = createContext<RoundDispatch | undefined>(undefined);

// Reducer
export const roundReducer = (state: RoundState, action: RoundAction): RoundState => {
  switch (action.type) {
    case 'TOGGLE': {
      return {
        ...state,
        direction: !state.direction,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

// State
export const roundInitialState: RoundState = {
  // Round direction:
  // * Left = false
  // * Right = true (default)
  direction: true,
};

// Provider
export const RoundProvider = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  const [state, dispatch] = useReducer(roundReducer, roundInitialState);

  return (
    <RoundStateContext.Provider value={state}>
      <RoundDispatchContext.Provider value={dispatch}>
        {children}
      </RoundDispatchContext.Provider>
    </RoundStateContext.Provider>
  );
};

// Hooks
const useRoundState = (): RoundState => {
  const state: RoundState | undefined = useContext(RoundStateContext);

  if (state === undefined) {
    throw new Error('useRoundState must be used within a RoundStateProvider');
  }

  return state;
};

const useRoundDispatch = (): RoundDispatch => {
  const dispatch: RoundDispatch | undefined = useContext(RoundDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useRoundDispatch must be used within a RoundDispatchProvider');
  }

  return dispatch;
};

export const useRound = (): RoundContext => {
  const state: RoundState = useRoundState();
  const dispatch: RoundDispatch = useRoundDispatch();

  // Bounded actions
  const toggleDirection = (): void => dispatch({ type: 'TOGGLE' });

  return {
    ...state,
    toggleDirection,
  };
};
