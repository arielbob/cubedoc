import React from 'react';
import MainLink from '../../components/MainLink';

const Step1 = () => (
	<section className='step step1'>
	  <section className='small-side'>
      <div className='row'>
        <div className='card img-card'>
					<img src={require('../../img/4x4/keyhole.png')}/>
          <span className='caption'>Keyhole Cross</span>
        </div>
      </div>
	  </section>
	  <section className='card step-card'>
      <h3>The Cross</h3>
      <p className='text-warning blue'>This tutorial assumes that you already know how to solve a 4x4, but want to solve it more efficiently.</p>
      <p>The first step of the Yau Method is to complete the white and yellow centers.  Next, pair three edges of the cross.  Start by pairing the white edges and putting them into position.  Next, rotate your cube so that the cross is on your left side and the open slot is at the top.</p>
	  </section>
	</section>
);

const Step2 = () => (
	<section className='step step2'>
	  <section className='card step-card'>
      <h3>The Centers</h3>
      <p>Solving the centers using the Yau Method is done by using the empty slot created by your three edge cross. The empty slot is your working layer to create the centers. You do this by creating lines at the top and only rotating the three right layers.</p>
      <p>Form a two long line at the top, then put it on the left of the top center. Then, rotate the inner left layer clockwise. Do this until you have three lines of three centers solved and one empty center at the top remains. Create the other three lines and pair them with the lines you just created. Your centers should be solved.</p>
      <p>Finish by pairing the final white edge of the cross.</p>
	  </section>
    <section className='small-side'>
      <div className='row'>
        <div className='card img-card'>
					<img src={require('../../img/4x4/centers.png')}/>
          <span className='caption'>Solved Centers</span>
        </div>
      </div>
    </section>
	</section>
);

const Step3 = () => (
	<section className='step step3'>
    <section className='small-side'>
      <div className='row'>
        <div className='card img-card'>
					<img src={require('../../img/4x4/oll-parity.png')}/>
          <span className='caption'>OLL Parity</span>
        </div>
        <div className='card img-card'>
					<img src={require('../../img/4x4/pll-parity.png')}/>
          <span className='caption'>PLL Parity</span>
        </div>
      </div>
    </section>
	  <section className='card step-card'>
      <h3>Pairing Edges and 3x3 Stage</h3>
      <p>Finish pairing the edges and then solve the cube like a 3x3.</p>
      <p>When on the last layer, there is a chance that you will encounter a parity case. Parity cases are cases that are not possible on the 3x3. Therefore, these cases need special algorithms to solve (x means to rotate the whole cube away from you 90 degrees, and Rr means to rotate only the inner right layer clockwise).</p>
      <p>OLL Parity:</p>
      <ul>
        <li>r U2 x r U2 r U2 r' U2 l U2 r' U2 r U2 r' U2 r'</li>
      </ul>
      <p>PLL Parity:</p>
      <ul>
        <li>Rr2 U2 Rr2 u2 Rr2 U2 u2</li>
      </ul>
	  </section>
	</section>
);

const Conclusion = () => (
	<section className='step'>
	  <section className='card step-card'>
      <h3>Other Pages</h3>
      <section className='link-info'>
        <div className='link-block'>
					<MainLink to='/4x4/parity'>Parity Algorithms</MainLink>
          <p>A collection of various parity cases and alogrithms to solve them.</p>
        </div>
        <div className='link-block'>
					<MainLink to='/4x4/tips'>Tips</MainLink>
          <p>General tips to help you solve the 4x4 cube.</p>
        </div>
        <div className='link-block'>
					<MainLink to='/3x3/how-to-solve'>3x3</MainLink>
          <p>Review how to solve the 3x3 cube.</p>
        </div>
      </section>
	  </section>
	</section>
);

const YauMethod = () => (
  <div>
    <h2 className='article-name'>Yau Method</h2>
    <section className='instructions instructions-4x4 blue'>
      <Step1/>
      <Step2/>
      <Step3/>
      <Conclusion/>
    </section>
  </div>
);

export default YauMethod;
