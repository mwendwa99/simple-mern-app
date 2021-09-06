import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import routes from './Config/routes';
import './App.css';


function App() {

  return (
    <Router>
      <Switch>
        {
          routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
