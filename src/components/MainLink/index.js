import React from 'react';
import { Link } from 'react-router-dom';

const MainLink = ({to, className, children, ...rest}) => (
	<Link to={to} className={['link-main', className].join(' ')} {...rest}><span className='underline'></span>{children}<span className='arrow'>&rarr;</span></Link>
)

export default MainLink;
