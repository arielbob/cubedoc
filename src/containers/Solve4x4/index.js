import React from 'react';
import {
	Link,
	Route
} from 'react-router-dom';
import YauMethod from './YauMethod';
import Parity from './Parity';

const Solve4x4 = ({match}) => (
  <div className='container bleed-top'>
    <h1 className='title-big blue'>4x4</h1>
    <section className='instructions instructions-4x4 blue'>
			<Route path={match.url + '/yau-method'} render={YauMethod} />
			<Route path={match.url + '/parity'} render={Parity} />
    </section>
  </div>
);

export default Solve4x4;
