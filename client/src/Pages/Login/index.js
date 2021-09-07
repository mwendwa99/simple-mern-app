import React, { useState } from 'react';
import styles from './login.module.css';

import { loginUser, useAuthState, useAuthDispatch } from '../../Context';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get dispatch method from the useDispatch custom hook
    const dispatch = useAuthDispatch();

    // async request to the server
    const handleLogin = async (e) => {
        e.preventDefault();
        let payload = { email, password }

        try {
            let response = await loginUser(dispatch, payload) //this action makes the request and handles all state changes
            if (!response.user) return props.history.push('/dashboard') //navigate to dashboard on success
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className={styles.container}>
            <div className={{ width: 200 }}>
                <h1>Login Page</h1>
                <form>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <label htmlFor="email">Username</label>
                            <input type="text" id='email' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.loginFormItem}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="" id="password" value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={handleLogin} >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;