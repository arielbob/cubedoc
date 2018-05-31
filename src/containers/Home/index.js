import React from 'react';
import MainCard from '../../components/MainCard';
import MainLink from '../../components/MainLink';

const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        <h1 className='logo'>CubeDoc</h1>
        <h2 className='slogan'>Easy to read speedcubing documentation.</h2>
      </div>
      <MainCard
        title='3x3'
        description={'The classic Rubik\'s cube. Learn how to solve it in easy steps and minimal memorization.'}
        color='red'
        link='/3x3/how-to-solve'
        >
					<MainLink to='/3x3/oll'>OLL Algorithms</MainLink>
          <p>Learn various algorithms to orient the last layer of the 3x3.</p>
					<MainLink to='/3x3/pll'>PLL Algorithms</MainLink>
          <p>A collection of different last layer permutation algorithms.</p>
      </MainCard>
      <MainCard
        title='4x4'
        description={'The bigger Rubik\'s cube. Learn how to use the Yau Method and how to solve unique 4x4 cases.'}
        color='blue'
        link='/4x4/yau-method'
        >
					<MainLink to='/4x4/parity'>Parity Algorithms</MainLink>
          <p>A collection of different algorithms to solve the 4x4's special cases.</p>
      </MainCard>
    </div>
  );
}

export default Home;
