import React from 'react';
import { Link } from 'react-router-dom';

// TODO: add content to the footer

const Footer = () => (
	<footer className='footer'>
		<p><Link to='/'>CubeDoc</Link> | Created by <a href='http://arielb.me/'>Ariel Bobadilla</a></p>
	</footer>
);

export default Footer;
