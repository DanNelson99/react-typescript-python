/**
 * Redux like pattern for sharing state between routes
 */
import { createContext, useReducer } from 'react';
import { GlobalStateProviderProps } from './types';
import { reducer } from './globalReducer';

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {

  const initialState = {
    maxScreenWidth: 'mx-auto max-w-screen-xl',
  };

  return (
    <GlobalStateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalStateContext.Provider>
  )
};

