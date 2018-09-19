import React from 'react';
import { Link } from 'react-router-dom';

import noimage from '../img/no-cover-art.png';

const GenreAlbums = (props) => {
	const { artist } = props;

	return (
		<React.Fragment>
			<ul>
				<li>Album 1</li>
				<li>Album 2</li>
				<li>Album 3</li>
			</ul>
		</React.Fragment>
	);
};

export default GenreAlbums;