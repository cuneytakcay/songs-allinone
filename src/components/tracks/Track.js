import React from 'react';
import { Link } from 'react-router-dom';

const Track = (props) => {
	const { item } = props;

	return (
		<div className="col-md-6">
			<div className="card mb-3 shadow-sm">
				<div className="card-body row">
					<div className="col-lg-6">
						<Link to={`artist/${item.artist.name}`}>
							<img src={item.image[3]['#text']} alt={item.name} className="w-100" />
						</Link>
					</div>
					<div className="col-lg-6 pt-2">
						<Link to={`artist/${item.artist.name}`}>
							<h5><i className="fas fa-play text-primary"></i> &nbsp;{item.name}</h5>
						</Link>
						<p className="card-text">
							<a href={item.url} target="_blank" className="text-dark">
								by <strong>{item.artist.name}</strong>
							</a>
						</p>
					</div>
				</div>
				<div className="pl-3 pr-3 pb-3">
					<Link to={`#`} className="btn btn-dark btn-block">
						<i className="fas fa-chevron-right text-primary"></i> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Track;