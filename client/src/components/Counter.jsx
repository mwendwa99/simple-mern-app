import { useContext } from "react";
import { ThemeContext } from "../Context/Context";


const Counter = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkmode;

    const switchBtn = () => {
        if (darkMode) {
            theme.dispatch({ type: 'light' });
        } else {
            theme.dispatch({ type: 'dark' });
        }
    }

    const themeStyle = {
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        background: `${darkMode ? 'black' : 'white'}`,
        color: `${darkMode ? 'white' : 'black'}`,
        height: '100vh',
        width: '100vw',
    }

    return (
        <div style={themeStyle} >
            <h5>{darkMode ? "Hello Dark from 2049" : "Hello Light from 2049"}</h5>
            <div style={{ padding: '1rem' }}>
                <button onClick={switchBtn} >Light theme</button>
                <button onClick={switchBtn} >Dark theme</button>
            </div>
        </div>
    )
};

export default Counter;