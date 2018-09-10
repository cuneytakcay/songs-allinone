import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type) {
		case 'SEARCH_SONGS':
			return {
				...state,
				tracks: action.payload,
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
		tracks: [],
		heading: 'Top 10 Songs', 
		dispatch: action => this.setState(state => reducer(state, action)),
	};

	componentDidMount() {
		axios.get(`${rootURL}?method=chart.gettoptracks&limit=5&api_key=${key}&format=json`)
			.then(res => {
				this.setState({ tracks: res.data.tracks })
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
