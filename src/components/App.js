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

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={ScrollToTop} />
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/3x3' component={Solve3x3} />
          <Route path='/4x4' component={Solve4x4} />
        </div>
      </Router>
    );
  }
};
