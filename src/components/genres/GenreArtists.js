import React from 'react';
import { Link } from 'react-router-dom';

import noimage from '../img/no-cover-art.png';

const GenreArtists = (props) => {
	const { artist } = props;

	return (
		<React.Fragment>
			<ul>
				<li>Artist 1</li>
				<li>Artist 2</li>
				<li>Artist 3</li>
			</ul>
		</React.Fragment>
	);
};

export default GenreArtists;