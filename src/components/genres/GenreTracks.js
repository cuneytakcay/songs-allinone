import React from 'react';
import { Link } from 'react-router-dom';

import noimage from '../img/no-cover-art.png';

const GenreTracks = (props) => {
	const { artist } = props;

	return (
		<React.Fragment>
			<ul>
				<li>Track 1</li>
				<li>Track 2</li>
				<li>Track 3</li>
			</ul>
		</React.Fragment>
	);
};

export default GenreTracks;