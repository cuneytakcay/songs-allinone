import React from 'react';
import { Link } from 'react-router-dom';

import noimage from '../img/no-cover-art.png';

const Album = (props) => {
	const { item } = props;

	return (
		<div className="col-md-12">
			<div className="card mb-3 shadow-sm">
				<div className="card-header">
					<h5><i className="fas fa-music text-dark" /> &nbsp;{item.name.toUpperCase()}</h5>
				</div>
				<div className="card-body row">
					<div className="col-lg-3">
						{
							(item.image && item.image.length > 3) ? (
								<Link to={`album/${item.artist}/${item.name}`}>
									<img src={item.image[3]['#text']} alt={item.name} className="w-100" />
								</Link>
							) : (
								<img src={noimage} alt="Album not available" className="w-100" />
							)
						}
					</div>
					<div className="col-lg-3 pt-2">
						
					</div>
					<div className="col-lg-3 pt-2">
						
					</div>
					<div className="col-lg-3 pt-2">
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Album;