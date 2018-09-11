import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import noimage from '../img/no-cover-art.png';

const rootURL = `http://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Album extends Component {
	state = {
		artist: this.props.artist,
		album: this.props.album,
		imageURL: '',
	};

	componentDidMount() {
		axios.get(`${rootURL}?method=album.getinfo&api_key=${key}&artist=${this.state.artist}&album=${this.state.album}&format=json`)
			.then(res => {
				this.setState({ imageURL: res.data.album })	;
			})
			.catch(err => console.log(err));
	}

	render() {
		if (this.state.imageURL && this.state.imageURL.image[3]['#text'] !== '') {
			return (
				<Link to={`/album/${this.state.artist}/${this.state.album}`}>
					<img src={this.state.imageURL.image[3]['#text']} alt={this.state.album} className="w-100" />
				</Link>
			);
		} else {
			return (
				<img src={noimage} alt={this.state.album} className="w-100" />
			);
		}
	}
}

export default Album;