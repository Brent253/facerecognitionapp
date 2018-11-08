import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css';
import magicwand from './magicwand.png';

const Logo = () => {
	return (
	<div className='ma4 mt0'>
	<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 110, width: 110 }} >
		<div className="Tilt-inner pa3">
			<img style={{paddingTop: '5px'}} alt='logo' src={magicwand}/>
		</div>
	</Tilt>

	</div>
  );
}

export default Logo;