// Libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

// Components
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

// Styles
import './stylesheets/App.css';

// Routes

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route component={App}>
      <Route path="about" component={About} />
    </Route>
  </Router>
);

export default routes;
