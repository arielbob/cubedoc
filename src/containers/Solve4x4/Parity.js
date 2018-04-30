import React from 'react';
import { Link } from 'react-router-dom';

const Parity = () => (
	<div>
		<h2 className='article-name'>Parity</h2>
		<section className='instructions instructions-4x4 algorithms blue'>
      <section className='step multi'>
        <section className='step column'>
          <section className='card step-card'>
						<h3>Edge Flip</h3>
					</section>
          <div className='row wrap inline'>
						<div className='card img-card'>
							<span className='caption'>r U2 x r U2 r U2 r' U2 l U2 r' U2 r U2 r' U2 r'</span>
						</div>
					</div>
        </section>
        <section className='step column'>
          <section className='card step-card'>
						<h3>Edge Swaps</h3>
					</section>
          <div className='row wrap inline'>
						<div className='card img-card'>
							<span className='caption'>Rr2 U2 Rr2 u2 Rr2 U2 u2</span>
						</div>
						<div className='card img-card'>
							<span className='caption'>x R2 F' Rr2 U2 Rr2 u2 Rr2 U2 u2 F R2</span>
						</div>
					</div>
        </section>
      </section>
    </section>
	</div>
);

export default Parity;
