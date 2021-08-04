import React from 'react';
import GlobalStyle from './style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
//           <Route path='/' component={Home} exact />
        </Switch>
          <Home /> 
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;

