import React, { useContext, useEffect } from 'react';
import { ThemeContext, AuthContext } from './Context/Context';
import './App.css';
import Counter from './components/Counter';


function App() {

  // themes
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  // authentication
  const [authState, setAuthState] = useContext(AuthContext);

  return (
    <div className="App">
      <Counter darkMode={darkMode} />
    </div>
  );
}

export default App;
