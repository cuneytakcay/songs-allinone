import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type) {
		case 'SEARCH_SONGS':
			return {
				...state,
				topTracks: action.payload,
				heading: 'Search Results',
			};
		default:
			return state;
	}
};

const rootURL = `http://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

export class Provider extends Component {
	state = {
		topTracks: [],
		trackInfo: [],
		heading: 'Top 10 Songs', 
		dispatch: action => this.setState(state => reducer(state, action)),
	};

	componentDidMount() {
		axios.get(`${rootURL}?method=chart.gettoptracks&limit=10&api_key=${key}&format=json`)
			.then(res => {
				this.setState({ topTracks: res.data.tracks.track });
				this.state.topTracks.map(item => (
					axios.get(`${rootURL}?method=track.getInfo&api_key=${key}&artist=${item.artist.name}&track=${item.name}&format=json`)
						.then(res => {
							this.setState({ trackInfo: res.data.track });
						})
						.catch(err => console.log(err))
				));
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
