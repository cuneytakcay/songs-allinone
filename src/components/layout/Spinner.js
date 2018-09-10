import React from 'react';
import spinner from '../img/spinner.gif';

const Spinner = () => {
	return (
		<div>
			<img 
				src={spinner}
				alt="Loading..."
				style={{ width: '100px', display: 'block', margin: '40px auto' }}
			/>
		</div>
	);
}

export default Spinner;