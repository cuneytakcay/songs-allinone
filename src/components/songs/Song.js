import React from 'react';
import { Link } from 'react-router-dom';

import Album from './Album';

const Song = (props) => {
	const { track } = props;

	return (
		<div className="col-md-6">
			<div className="card mb-3 shadow-sm">
				<div className="card-body row">
					<div className="col-lg-6">
						<Album artist={track.artist.name} />
					</div>
					<div className="col-lg-6 pt-2">
						<Link to={`/artist/${track.artist.name}`}>
							<h5>{track.artist.name}</h5>
						</Link>
						<p className="card-text">
							<i className="fas fa-play text-primary"></i> <strong>Track</strong>: {track.name}
							<br />
							<i className="fas fa-compact-disc text-primary"></i> <strong>Album</strong>: 
						</p>
					</div>
				</div>
				<div className="pl-3 pr-3 pb-3">
					<Link to={`/lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
						<i className="fas fa-chevron-right text-primary"></i> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Song;