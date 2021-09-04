import React, { createContext } from 'react';
import createActions from './createActions';
import useAsyncReducer from '../hooks/useAsyncReducer';
import reducer, { initialState } from './reducer';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useAsyncReducer(reducer, initialState);

    const actions = createActions(dispatch);

    return (
        <CounterContext.Provier value={[state, actions]} >
            {children}
        </CounterContext.Provier>
    );
}