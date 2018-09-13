import React from 'react';
import { Link } from 'react-router-dom';

import noimage from '../img/no-cover-art.png';

const Track = (props) => {
	const { item } = props;

	return (
		<div className="col-md-6">
			<div className="card mb-3 shadow-sm">
				<div className="card-body row">
					<div className="col-lg-6">
						{
							(item.album && item.album.image.length > 3) ? (
								<Link to={`album/${item.artist.name}/${item.album.title}`}>
									<img src={item.album.image[3]['#text']} alt={item.album.title} className="w-100" />
								</Link>
							) : (
								<img src={noimage} alt="Album not available" className="w-100" />
							)
						}
					</div>
					<div className="col-lg-6 pt-2">
						<Link to={`artist/${item.artist.name}`}>
							<h6><i className="fas fa-play text-primary"></i> &nbsp;{item.name.toUpperCase()}</h6>
						</Link>
						<p className="card-text">
							by
							<a href={item.url} target="_blank" className="text-dark">
								<strong> {item.artist.name}</strong>
							</a>
						</p>
						<p>
							<i className="fas fa-compact-disc"></i>
							<strong>Album: </strong>
								{
									(item.album) ? (
										<a href={item.url} target="_blank" className="text-dark">{item.album.title}</a>
									) : (
										<span>Not available</span>
									)
								}
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