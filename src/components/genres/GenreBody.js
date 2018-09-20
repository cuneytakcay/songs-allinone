import React from 'react';
import { Link } from 'react-router-dom';

import GenreImage from './GenreImage';
import GenreTracks from './GenreTracks';
import GenreArtists from './GenreArtists';
import GenreAlbums from './GenreAlbums';
import noimage from '../img/no-cover-art.png';

const GenreBody = (props) => {
	const { genre } = props;

	return (
		<div className="card mb-3 shadow-sm">
			<div className="card-header">
				<h5><i className="fas fa-music text-dark" /> &nbsp;{genre.name.toUpperCase()}</h5>
			</div>
			<div className="card-body row">
				<div className="col-lg-3">
					<GenreImage />
				</div>
				<div className="col-lg-3 pt-2">
					<GenreTracks />
				</div>
				<div className="col-lg-3 pt-2">
					<GenreArtists />
				</div>
				<div className="col-lg-3 pt-2">
					<GenreAlbums />
				</div>
			</div>
		</div>
	);
};

export default GenreBody;