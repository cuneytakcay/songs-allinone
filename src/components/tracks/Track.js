import React from 'react';
import { Link } from 'react-router-dom';

const Track = (props) => {
	const { item } = props;

	return (
		<div className="col-md-6">
			<div className="card mb-3 shadow-sm">
				<div className="card-body row">
					<div className="col-lg-6">
						<Link to={`/album/${item.name}`}>
							<img src='#' alt={item.name} className="w-100" />
						</Link>
					</div>
					<div className="col-lg-6 pt-2">
						<Link to={`/track/${item.name}`}>
							<h5>{item.name}</h5>
						</Link>
						<p className="card-text">
							<i className="fas fa-play text-primary"></i> <strong>Track</strong>: {item.name}
							<br />
							<i className="fas fa-compact-disc text-primary"></i> <strong>Album</strong>:  
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