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
							(item.album && item.album.image.length > 3 && item.album.image[3]['#text'] !== '') ? (
								<Link to={`album/${item.artist.name}/${item.album.title}`}>
									<img src={item.album.image[3]['#text']} alt={item.album.title} className="w-100" />
								</Link>
							) : (
								<img src={noimage} alt="Album not available" className="w-100" />
							)
						}
					</div>
					<div className="col-lg-6 pt-2">
							<h6>
								<i className="fas fa-music text-dark" /> 
								<a href={item.url} target="_blank"> &nbsp;{item.name.toUpperCase()}</a>
							</h6>
						<p className="card-text">
							by
							<Link to={`artist/${item.artist.name}`}>
								<strong className="text-dark"> {item.artist.name}</strong>
							</Link>
						</p>
						<p>
							<i className="fas fa-compact-disc text-primary" />
							<strong> Album: </strong>
								{
									(item.album) ? (
										<Link to={`album/${item.artist.name}/${item.album.title}`}>{item.album.title}</Link>
									) : (
										<span>Not available</span>
									)
								}
						</p>
					</div>
				</div>
				<div className="pl-3 pr-3 pb-3">
					<Link to={`#`} className="btn btn-dark btn-block">
						<i className="fas fa-chevron-right text-primary" /> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Track;