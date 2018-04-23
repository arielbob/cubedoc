import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../containers/Home';
import Solve3x3 from '../containers/Solve3x3';
import Solve4x4 from '../containers/Solve4x4';

//maybe move the stylesheet imports here?
//can use render property instead of component for functional components (refactor dumb components that are using classes)
//TODO: do server rendering with routes

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/how-to-solve' component={Solve3x3} />
          <Route path='/yau-method' component={Solve4x4} />
        </div>
      </Router>
    );
  }
};
