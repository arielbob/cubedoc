import React from 'react';

class Solve3x3 extends React.Component {
  render() {
    return (
      <div className='container bleed-top'>
        <h1 className='title-big'>3x3</h1>
        <h2 className='article-name'>How to Solve</h2>
        <section className='instructions instructions-3x3'>
          <section className='step step1'>
            <section className='card step-card'>
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
            <section className='diagrams-notation'>
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
          <section className='step step2'>
            <div className='card img-card'>
              <span className='caption'>Solved Cross</span>
            </div>
            <section className='card step-card'>
              <h3>The Cross</h3>
              <p>The first step of solving the Rubik's cube is to solve the cross. This step is very intuitive and gets easier when it is practiced. In this tutorial, we solve a white cross, but the cross can be any colour. The non-white side of the edge pieces must all align with its corresponding center piece.</p>
              <p className='text-warning'>The center pieces of the Rubik's cube will never move. Blue will always be opposite from green, red will always be opposite from orange, and yellow with white.</p>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default Solve3x3;
