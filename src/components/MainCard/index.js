import React from 'react';
import { Link } from 'react-router-dom';

class MainCard extends React.Component {
  render() {
    let { color, title, description, link, children } = this.props;

    return (
      <section className={['main-card', color].join(' ')}>
        <div className='main-label'>
          <h1 className='main-title'>{title}</h1>
        </div>
        <div className='content'>
          <div className='content-inner'>
            <p>{description}</p>
            <Link to={link || '/'} className={['btn-main', color].join(' ')}>Learn</Link>
          </div>
          <div className='content-inner'>
            {children}
          </div>
        </div>
      </section>
    );
  }
}

export default MainCard;
