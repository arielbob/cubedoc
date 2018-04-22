import React from 'react';

const Step1 = () => (
	<section className='step step1'>
	  <section className='card step-card small-side'>
			<h3>Notation</h3>
			<p>Solving a Rubik's cube involves using algorithms, which are sets of moves to accomplish a task. Rubik's cube algorithms use the following notation:</p>
			<ul>
			  <li>U: Rotate the top layer clockwise</li>
			  <li>D: Rotate the bottom layer clockwise</li>
			  <li>L: Rotate the left layer clockwise</li>
			  <li>R: Rotate the right layer clockwise</li>
			  <li>F: Rotate the front layer clockwise</li>
			  <li>B: Rotate the back layer clockwise</li>
			</ul>
			<p>When a move has an apostrophe (') after it, then that move should be done counter-clockwise.</p>
			<p>When a move has a two (2) after it, then that move should be performed twice.</p>
			<p className='text-warning'>In this tutorial, the front face will always be shown as the green face in diagrams.</p>
			<p>Example algorithms:</p>
			<ul>
			  <li>R U R' U R U2 R'</li>
			  <li>F R U' R' U' R U R' F' R U R' U' R' F R F'</li>
			</ul>
	  </section>
	  <section className='mobile-horizontal-scroll'>
			<div className='row'>
			  <div className='card img-card'>
				<span className='caption'>U</span>
			  </div>
			  <div className='card img-card'>
				<span className='caption'>L</span>
			  </div>
			  <div className='card img-card'>
				<span className='caption'>F</span>
			  </div>
			</div>
			<div className='row'>
			  <div className='card img-card'>
				<span className='caption'>D</span>
			  </div>
			  <div className='card img-card'>
				<span className='caption'>R</span>
			  </div>
			  <div className='card img-card'>
				<span className='caption'>B</span>
			  </div>
			</div>
	  </section>
	</section>
);

const Step2 = () => (
	<section className='step step2'>
		<div className='card img-card small-side'>
			<span className='caption'>Solved Cross</span>
		</div>
		<section className='card step-card'>
			<h3>The Cross</h3>
			<p>The first step of solving the Rubik's cube is to solve the cross. This step is very intuitive and gets easier when it is practiced. In this tutorial, we solve a white cross, but the cross can be any colour. The non-white side of the edge pieces must all align with its corresponding center piece.</p>
			<p className='text-warning'>The center pieces of the Rubik's cube will never move. Blue will always be opposite from green, red will always be opposite from orange, and yellow with white.</p>
		</section>
	</section>
);

const Step3 = () => (
	<section className='step step3'>
		<section className='card step-card'>
			<h3>Finishing the First Layer</h3>
			<p>Now, the corners of the first layer must be placed in their correct positions. Start by rotating the cube so that the cross is on the bottom. Next, position one of the four corners that has a white piece above its correct position. The corner can be inserted by doing the algorithm:</p>
			<ul>
				<li>U' L' U L</li>
			</ul>
			<p>If the corner is not inserted correctly the first time the algorithm is done, keep repeating it until it is inserted. This algorithm will also solve the case if the corner is inserted incorrectly in its position.</p>
			<p>Repeat this for the other three corners.</p>
			<div className='text-warning'>
				<p>The algorithm above works when the corner is to the left of your front face, if it is to the right of your front face, you can use this algorithm:</p>
				<ul>
					<li>U R U' R'</li>
				</ul>
			</div>
		</section>
		<section className='diagrams-first-layer small-side'>
			<div className='row'>
				<div className='img-card'>
					<span className='caption'>Solved First Layer</span>
				</div>
			</div>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>Corner Above Position</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>Corner Incorrectly Inserted</span>
				</div>
			</div>
		</section>
	</section>
);

const Step4 = () => (
	<section className='step step4'>
		<section className='card small-side'>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>Solved First Two Layers</span>
				</div>
			</div>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>Left Edge Insert</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>Right Edge Insert</span>
				</div>
			</div>
		</section>
		<section className='card step-card'>
			<h3>Inserting the Edges</h3>
			<p>To complete the first two layers, we must insert the edges. To insert an edge, position an edge piece to be inserted above the center who's colour corresponds to the side of the edge it is touching. If the edge is to be inserted to its left, do the following algorithm:</p>
			<ul>
				<li>U' L' U L U F U' F'</li>
			</ul>
			<p>If it is to be inserted to the right, do this algorithm:</p>
			<ul>
				<li>U R U' R' U' F' U F</li>
			</ul>
			<p>If an edge is in the first two layers, but in an incorrect position, then insert a different edge in that position to get the mispositioned edge out.</p>
		</section>
	</section>
);

const Step5 = () => (
	<section className='step step5'>
		<section className='card step-card small-side'>
			<h3>Orientation of the Last Layer</h3>
			<p>The second to last step of solving the 3x3 cube is to orient the pieces of the last layer so that the whole top face is a single colour. In our case, our last layer's face will be yellow.</p>
			<p>To orient the last layer, match your case to one of the top three cases. If none of the top three cases match your case, you can skip this algorithm. If they do, perform these moves:</p>
			<ul>
				<li>R U R' U'</li>
			</ul>
			<p>For the square case, you can either do the above algorithm and match it to another case, or do this algorithm:</p>
			<ul>
				<li>f2 R U R' U' f2'</li>
			</ul>
			<p>The lowercase F means to rotate the front layer with the middle layer, so you are doing what looks like a thick rotation of the front face.</p>
			<p>To complete orientation, match your case to one of the bottom three that most closely matches it and perform this algorithm:</p>
			<ul>
				<li>R U R' U R U2 R' </li>
			</ul>
			<p>In essence, if you have one yellow corner, rotate the top so that the corner is in the bottom left. If you have two yellow corners, rotate the top so that the top left corner of your front face has a yellow square. Finally, if you have no yellow corners, make sure the top right corner of your left face has a yellow square.</p>
			<p className='text-warning'>
				If you have three yellow corners, your cube is unsolvable. You must physically twist a corner, or take your cube apart and reassemble it so that it is solvable.
			</p>
		</section>
		<section className=''>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>Dot Case</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>Line Case</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>Square Case</span>
				</div>
			</div>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>One Yellow Corner</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>Two Yellow Corner</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>No Yellow Corner</span>
				</div>
			</div>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>Orientated Last Layer</span>
				</div>
			</div>
		</section>
	</section>
);

const Step6 = () => (
	<section className='step step6'>
		<section className='card step-card'>
			<h3>Orientation of the Last Layer</h3>
			<p>The second to last step of solving the 3x3 cube is to orient the pieces of the last layer so that the whole top face is a single colour. In our case, our last layer's face will be yellow.</p>
			<p>To orient the last layer, match your case to one of the top three cases. If none of the top three cases match your case, you can skip this algorithm. If they do, perform these moves:</p>
			<ul>
				<li>R U R' U'</li>
			</ul>
			<p>For the square case, you can either do the above algorithm and match it to another case, or do this algorithm:</p>
			<ul>
				<li>f2 R U R' U' f2'</li>
			</ul>
			<p>The lowercase F means to rotate the front layer with the middle layer, so you are doing what looks like a thick rotation of the front face.</p>
			<p>To complete orientation, match your case to one of the bottom three that most closely matches it and perform this algorithm:</p>
			<ul>
				<li>R U R' U R U2 R' </li>
			</ul>
			<p>In essence, if you have one yellow corner, rotate the top so that the corner is in the bottom left. If you have two yellow corners, rotate the top so that the top left corner of your front face has a yellow square. Finally, if you have no yellow corners, make sure the top right corner of your left face has a yellow square.</p>
			<p className='text-warning'>
				If you have three yellow corners, your cube is unsolvable. You must physically twist a corner, or take your cube apart and reassemble it so that it is solvable.
			</p>
		</section>
		<section className='small-side'>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>Dot Case</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>Line Case</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>Square Case</span>
				</div>
			</div>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>One Yellow Corner</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>Two Yellow Corner</span>
				</div>
				<div className='card img-card'>
					<span className='caption'>No Yellow Corner</span>
				</div>
			</div>
			<div className='row'>
				<div className='card img-card'>
					<span className='caption'>Orientated Last Layer</span>
				</div>
			</div>
		</section>
	</section>
);

class Solve3x3 extends React.Component {
  render() {
    return (
      <div className='container bleed-top'>
        <h1 className='title-big'>3x3</h1>
        <h2 className='article-name'>How to Solve</h2>
        <section className='instructions instructions-3x3'>
					<Step1/>
          <Step2/>
          <Step3/>
					<Step4/>
					<Step5/>
        </section>
      </div>
    );
  }
}

export default Solve3x3;
