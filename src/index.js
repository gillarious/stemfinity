import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Leaders from './pages/Leaders'
import Lessons from './pages/Lessons'


ReactDOM.render((
  <BrowserRouter>
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/leaders" component={Leaders} />
              <Route path="/lessons" component={Lessons} />
          </Switch>
      </main>
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
