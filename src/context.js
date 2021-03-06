import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type) {
		case 'SEARCH_TRACKS':
			return {
				...state,
				trackInfo: action.payload,
				heading: 'Search Results',
			};
		default:
			return state;
	}
};

const rootURL = `https://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

export class Provider extends Component {
	state = {
		topTracks: [],
		trackInfo: [],
		heading: 'Top 10 Tracks', 
		dispatch: action => this.setState(state => reducer(state, action)),
	};

	componentDidMount() {
		const tracks = [];

		axios.get(`${rootURL}?method=chart.gettoptracks&limit=10&api_key=${key}&format=json`)
			.then(res => {
				this.setState({ topTracks: res.data.tracks.track });
				this.state.topTracks.forEach(track => {
					axios.get(`${rootURL}?method=track.getInfo&api_key=${key}&artist=${track.artist.name}&track=${track.name}&format=json`)
						.then(res => {
							tracks.push(res.data.track);
							this.setState({ trackInfo: tracks });
						});
				});
			})
			.catch(err => console.log(err));
	}

  render() {
    return (
    	<Context.Provider value={this.state}>
    		{this.props.children}
    	</Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;