import React from 'react';
import {
	Link,
	Route
} from 'react-router-dom';
import HowToSolve from './HowToSolve';
import Oll from './Oll';
import Pll from './Pll';

class Solve3x3 extends React.Component {
  render() {
		let { match } = this.props;
    return (
      <div className='container bleed-top'>
        <h1 className='title-big red'>3x3</h1>
				<Route path={match.url + '/how-to-solve'} render={HowToSolve} />
				<Route path={match.url + '/oll'} render={Oll} />
				<Route path={match.url + '/pll'} render={Pll} />
      </div>
    );
  }
}

export default Solve3x3;
