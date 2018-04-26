import React from 'react';
import { Link } from 'react-router-dom';

const Oll = () => (
	<div>
		<h2 className='article-name'>OLL</h2>
		<section className='instructions instructions-3x3 algorithms red'>
			<section className='step column'>
				<section className='card step-card'>
					<h3>No Cross Algorithms</h3>
				</section>
				<div className='row wrap'>
					<div className='card img-card'>
						<span className='caption'>F R U R' U' F' f R U R' U' f</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>F R U R' U' F'</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>f R U R' U' f'</span>
					</div>
				</div>
			</section>
			<section className='step column'>
				<section className='card step-card'>
					<h3>Cross Algorithms</h3>
				</section>
				<div className='row wrap'>
					<div className='card img-card'>
						<span className='caption'>R U R' U R U2 R'</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>R U2 R' U' R U' R'</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>R U2 R' U' R U R' U' R U' R'</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>R U2 R2' U' R2 U' R2' U2 R</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>R2 D R' U2 R D' R' U2 R'</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>l' U' L U R U' r' F</span>
					</div>
					<div className='card img-card'>
						<span className='caption'>R' F R B' R' F' R B</span>
					</div>
				</div>
			</section>
		</section>
	</div>
);

export default Oll;
