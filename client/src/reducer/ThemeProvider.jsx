import React, { useReducer } from 'react'
import { ThemeContext } from '../Context/Context'

const initialState = { darkmode: false };

const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'light':
            return { darkmode: false };
        case 'dark':
            return { darkmode: true };
        default:
            return state
    }
}

export const ThemeProvider = (props) => {

    const [state, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
