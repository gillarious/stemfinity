import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Leaders from './pages/Leaders'
import Lessons from './pages/Lessons'
import Variables0 from './pages/Variables0'
import Variables1 from './pages/Variables1'
import Variables2 from './pages/Variables2'
import Variables3 from './pages/Variables3'
import Conditionals from './pages/Conditionals'
import gracehopper from './pages/gracehopper'

ReactDOM.render((
  <BrowserRouter>
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/tech/leaders" component={Leaders} />
              <Route path="/tech/lessons" component={Lessons} />
              <Route path="/gracehopper" component={gracehopper} />
              <Route path="/variables0" component={Variables0} />
              <Route path="/variables1" component={Variables1} />
              <Route path="/variables2" component={Variables2} />
              <Route path="/variables3" component={Variables3} />
              <Route path="/conditionals0" component={Conditionals} />
          </Switch>
      </main>
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
