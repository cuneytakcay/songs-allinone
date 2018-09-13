import React from 'react';
import { Link } from 'react-router-dom';

const Artist = (props) => {
	const { item } = props;

	return (
		<div className="col-md-6">
			<div className="card mb-3 shadow-sm">
				<div className="card-body row">
					<div className="col-lg-6">
						<Link to={`/artist/${item.track[0].artist.name}`}>
							<img src={item.track[0].image[3]['#text']} alt={item.track[0].artist.name} className="w-100" />
						</Link>
					</div>
					<div className="col-lg-6 pt-2">
						<Link to={`/artist/${item.track[0].artist.name}`}> 
							<h5><i className="fas fa-microphone-alt text-dark" /> &nbsp;{item.track[0].artist.name.toUpperCase()}</h5>
						</Link>
						<strong>Top tracks: </strong>
						<ul>
							{item.track.map(track => <li key={track.mbid || track.name}>{track.name}</li>)}
						</ul>
					</div>
				</div>
				<div className="pl-3 pr-3 pb-3">
					<Link to={`/artist/${item.track[0].artist.name}`} className="btn btn-dark btn-block">
						<i className="fas fa-chevron-right text-primary" /> View Artist Info
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Artist;