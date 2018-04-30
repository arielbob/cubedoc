import React from 'react';
import { Link } from 'react-router-dom';

const Tips = () => (
	<div>
		<h2 className='article-name'>Tips</h2>
		<section className='instructions instructions-4x4 blue'>
				<section className='step-card card'>
					<h3>Getting Faster</h3>
					<ul>
						<li>4x4 solving really benefits from a good cube.  Some good brands for 4x4s are Moyu, Shengshou and Maru. The more modern cubes like the Moyu AoSu are less prone to popping. Popping cubes is really frustrating, so having a cube that is sturdy is very valuable.</li>
						<li>
							Practice seeing edge pairs before you are doing them.
							<ul>
								<li>
									Having good look ahead for edge pairing is a really good skill to have and can ease the transition to the 3x3 phase.
								</li>
							</ul>
						</li>
					</ul>
				</section>
		</section>
	</div>
);

export default Tips;
