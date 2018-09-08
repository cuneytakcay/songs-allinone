import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import noimage from './no-cover-art.png'

class Album extends Component {
	state = {
		artist: this.props.artist.replace('&', 'and'),
		album: this.props.album.replace('&', 'and'),
		imageURL: '',
	}

	componentDidMount() {
		axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_LAST_FM_KEY}&artist=${this.state.artist}&album=${this.state.album}&format=json`)
			.then(res => {
				this.setState({ imageURL: res.data.album })	
			})
			.catch(err => console.log(err))
	}

	render() {
		if (this.state.imageURL && this.state.imageURL.image[3]['#text'] !== '') {
			return (
				<Link to="/album">
					<img src={this.state.imageURL.image[3]['#text']} alt={this.state.album} className="w-100" />
				</Link>
			)
		} else {
			return (
				<img src={noimage} alt={this.state.album} className="w-100" />
			)
		}
	}
}

export default Album