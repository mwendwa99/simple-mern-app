import React, { useContext } from 'react';
import { ThemeContext } from './Context/Context';
import './App.css';
import Counter from './components/Counter';


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  return (
    <div className="App">
      <Counter darkMode={darkMode} />
    </div>
  );
}

export default App;
