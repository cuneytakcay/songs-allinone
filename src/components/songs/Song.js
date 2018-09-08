import React from 'react'
import { Link } from 'react-router-dom'

import Album from './Album'

const Song = (props) => {
	const { song } = props

	return (
		<div className="col-md-6">
			<div className="card mb-3 shadow-sm">
				<div className="card-body row">
					<div className="col-lg-6">
						<Album artist={song.artist_name} album={song.album_name} />
					</div>
					<div className="col-lg-6 pt-2">
						<h5>{song.artist_name}</h5>
						<p className="card-text">
							<i className="fas fa-play text-primary"></i> <strong>Song</strong>: {song.track_name}
							<br />
							<i className="fas fa-compact-disc text-primary"></i> <strong>Album</strong>: {song.album_name}
						</p>
					</div>
				</div>
				<div className="pl-3 pr-3 pb-3">
					<Link to={`lyrics/song/${song.track_id}`} className="btn btn-dark btn-block">
						<i className="fas fa-chevron-right text-primary"></i> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Song