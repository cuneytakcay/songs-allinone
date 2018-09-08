import React from 'react'
import { Link } from 'react-router-dom'

const Song = (props) => {
	const { song } = props

	return (
		<div className="col-md-6">
			<div className="card mb-3 shadow-sm">
				<div className="card-body">
					<h5>{song.artist_name}</h5>
					<p className="card-text">
						<i className="fas fa-play text-primary"></i> <strong>Song</strong>: {song.track_name}
						<br />
						<i className="fas fa-compact-disc text-primary"></i> <strong>Album</strong>: {song.album_name}
					</p>
					<Link to={`lyrics/song/${song.track_id}`} className="btn btn-dark btn-block">
						<i className="fas fa-chevron-right text-primary"></i> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Song