import React from 'react';
import GlobalStyle from './style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route>
            <Home />
          </Route>
          {/* <Route path='/' component={Home} exact /> */}
        </Switch>
         {/* <Home /> */}
       <GlobalStyle />
     </Router>
    </div>
  );
}

export default App;

