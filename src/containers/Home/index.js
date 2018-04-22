import React from 'react';
import MainCard from '../../components/MainCard';

class Home extends React.Component {
  render() {
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
          link='/how-to-solve'
          >
            <a className='link-main' href='#'><span className='underline'></span>OLL Algorithms<span className='arrow'>&rarr;</span></a>
            <p>Learn various algorithms to orient the last layer of the 3x3.</p>
            <a className='link-main' href='#'><span className='underline'></span>PLL Algorithms<span className='arrow'>&rarr;</span></a>
            <p>A collection of different last layer permutation algorithms.</p>
          </MainCard>
          <MainCard
            title='4x4'
            description={'The bigger Rubik\'s cube. Learn how to use the Yau Method and how to solve unique 4x4 cases.'}
            color='blue'
            >
              <a className='link-main' href='#'><span className='underline'></span>Parity Algorithms<span className='arrow'>&rarr;</span></a>
              <p>A collection of different algorithms to solve the 4x4's special cases.</p>
            </MainCard>
          </div>
        );
  }
}

export default Home;
