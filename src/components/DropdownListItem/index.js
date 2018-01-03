import React from 'react';

class DropdownListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true
    }
  }

  toggleHidden() {
    this.setState({hidden: !this.state.hidden});
  }

  handleMouseEnter() {
    this.setState({hidden: false});
  }

  handleMouseLeave() {
    this.setState({hidden: true});
  }

  render() {
    return (
      <li onClick={() => {this.toggleHidden()}} onMouseEnter={() => {this.handleMouseEnter()}} onMouseLeave={() => {this.handleMouseLeave()}}>
        <a href='#'>
          {this.props.text}
        </a>
        <ul onClick={(e) => {e.stopPropagation()}} className={['nav-dropdown', this.state.hidden && 'hidden'].join(' ')}>
          {this.props.children}
        </ul>
      </li>
    )
  }
}

export default DropdownListItem;
