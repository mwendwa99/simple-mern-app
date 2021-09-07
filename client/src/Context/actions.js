// const ROOT_URL = ""

import { json } from "body-parser";

export const loginUser = async (dispatch, loginPayload) => {
    const requestOptions = {
        method: 'POST',
        Headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };
    try {
        dispatch({ type: 'REQUEST_LOGIN' })
        let response = await fetch('/login', requestOptions);
        let data = await response.json();

        if (data.user) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', json.stringify(data));
            return data
        }
        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error })
    }
}
export const logout = async (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}