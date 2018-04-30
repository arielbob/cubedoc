import React from 'react';
import { Link } from 'react-router-dom';
import DropdownListItem from '../DropdownListItem';

//TODO: try implementing transitions with ReactCSSTransitionGroup
//TODO: try flexbox
//TODO: make responsive

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  // switch to toggleMenu = () => this.setState(state)?
  // i think this needs a bleeding edge feature thing or whatever (i.e. it's not supported in this version of javascript)
  toggleMenu() {
    this.setState({toggled: !this.state.toggled});
  }

  render() {
    return (
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <Link to='/' href="#!">🙂</Link>
          </div>
          <nav>
            <div className='nav-mobile' onClick={() => {this.toggleMenu()}}>
              <a id='nav-toggle' className={[this.state.toggled && 'active'].join(' ')} href='#'><span></span></a>
            </div>
            <ul className={['nav-list', !this.state.toggled && 'hidden'].join(' ')}>
              <DropdownListItem text='3x3'>
                <li><Link to='/3x3/how-to-solve'>How to Solve</Link></li>
                <li><Link to='/3x3/oll'>OLL</Link></li>
                <li><Link to='/3x3/pll'>PLL</Link></li>
                <li><a href='#'>Tips</a></li>
              </DropdownListItem>
              <DropdownListItem text='4x4'>
                <li><Link to='/yau-method'>Yau Method</Link></li>
                <li><a href='#'>Parity</a></li>
                <li><a href='#'>Tips</a></li>
              </DropdownListItem>
              <li className='learn-container'><Link to='/how-to-solve' className='btn-main'>Learn</Link></li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Navbar;
