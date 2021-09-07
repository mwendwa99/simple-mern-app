import React, { createContext, useContext, useReducer } from 'react';
import { initialState, AuthReducer } from './reducer';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

// custom hooks so that we dont have to useContext in every component
// throw error is context is used outside AuthProvider scope

export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within AuthProvider");
    }
    return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error('useAuthDispatch must be used within AuthProvider')
    }
    return context;
}

// custom provider for child components to handle user state
export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}