import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../containers/Home';
import Solve3x3 from '../containers/Solve3x3';
import Solve4x4 from '../containers/Solve4x4';

// const baseName = '/projects/cubedoc';
const baseName = '/';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default class App extends React.Component {
  render() {
    return (
      <Router basename={baseName}>
        <div>
          <Route component={ScrollToTop} />
					<div className='wrapper'>
	          <Navbar />
	          <Switch>
	            <Route exact path='/' render={Home} />
	            <Redirect exact from='/3x3' to='/3x3/how-to-solve' />
	            <Route path='/3x3' render={Solve3x3} />
	            <Redirect exact from='/4x4' to='/4x4/yau-method' />
	            <Route path='/4x4' render={Solve4x4} />
	          </Switch>
					</div>
					<Footer />
        </div>
      </Router>
    );
  }
};
