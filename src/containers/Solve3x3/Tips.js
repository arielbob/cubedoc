import React from 'react';
import { Link } from 'react-router-dom';

const Tips = () => (
	<div>
		<h2 className='article-name'>Tips</h2>
		<section className='instructions instructions-3x3 red'>
				<section className='step-card card'>
					<h3>Getting Faster</h3>
					<ul>
						<li>To get faster, a good cube really helps. Some good brands are Moyu, Dayan, and Gans. There are many different brands of speedcubes and it is best to try a lot before you decide on one.</li>
						<li>Practice and learn more algorithms like OLL, and PLL.</li>
						<li>
							Learn how to do finger tricks. One difference between a beginner and somebody who has been cubing for a while is how fluid they perform their algorithms. For starters, try holding the cube with both hands, three fingers of each hand on the back, and the thumbs on the front.  Your hands should only be on the left and right layers.  You can do this with the top and bottom for other turns. This helps you use your fingers to rotate the layers rather than your whole hand.
							<ul>
								<li>
									The way you hold the cube also makes it easier when doing common sequences like an R' followed by an F move.  If you hold it the first way, when you are on the F move, your hand will already by in position to rotate that layer.
								</li>
								<li>
									Having good finger tricks for algorithms is essential to train your muscle memory.
								</li>
							</ul>
						</li>
						<li>
							Take breaks.
							<ul>
								<li>
									Sometimes, when people hit a wall in their times, taking a break really helps, and they come back being faster than they were before.
								</li>
							</ul>
						</li>
						<li>
							Take it slow.
							<ul>
								<li>
									If you practice solving the Rubik's cube with no pauses, even if it is slow, your times will be helped substantially.  Doing these slow continuous solves help you look ahead and in turn make you solve faster.  Solving without pauses is always better than having quick movements followed by long periods of time of just looking for pieces.
								</li>
							</ul>
						</li>
					</ul>
				</section>
		</section>
	</div>
);

export default Tips;
