import React from 'react';
import { Link } from 'react-router-dom';

const Pll = () => (
	<div>
		<h2 className='article-name'>PLL</h2>
		<section className='instructions instructions-3x3 algorithms red'>
			<section className='step multi'>
				<section className='step column'>
					<section className='card step-card'>
						<h3>Edge Cycles</h3>
					</section>
					<div className='row wrap inline'>
						<div className='card img-card'>
							<span className='caption'>R2 U R U R' U' R' U' R' U R'</span>
						</div>
						<div className='card img-card'>
							<span className='caption'>R U' R U R U R U' R' U' R2</span>
						</div>
					</div>
				</section>
				<section className='step column'>
					<section className='card step-card'>
						<h3>Corner Cycles</h3>
					</section>
					<div className='row wrap inline'>
						<div className='card img-card'>
							<span className='caption'>x R' U R' D2 R U' R' D2 R2</span>
						</div>
						<div className='card img-card'>
							<span className='caption'>x R2 D2 R U R' D2 R U' R</span>
						</div>
					</div>
				</section>
			</section>
				<section className='step column'>
				<section className='card step-card'>
					<h3>Swaps</h3>
				</section>
				<div className='row wrap'>
					<div className='card img-card'>
						<span className='caption'>M2 U' M2 U2 M2 U' M2</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>M2 U M2 U M U2 M2 U2 M U2</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>x' R U' R' D R U R' D' R U R' D R U' R' D'</span>
					</div>
				</div>
			</section>
		</section>
	</div>
);

export default Pll;
