import React from 'react';
import { Route, Switch} from 'react-router'
import Home from './components/Home';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  return (
    <Switch>
        <Route
          exact
          path = "/"
          component = {Home} />
          <Route 
            path="/dashboard"
            component={Dashboard} />
      </Switch>
  );
}

export default App;
