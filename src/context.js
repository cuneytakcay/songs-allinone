import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type) {
		case 'SEARCH_SONGS':
			return {
				...state,
				results: action.payload,
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
		results: [],
		heading: 'Top 10 Artists on Last.fm', 
		dispatch: action => this.setState(state => reducer(state, action)),
	};

	componentDidMount() {
		axios.get(`${rootURL}?method=chart.gettopartists&limit=10&api_key=${key}&format=json`)
			.then(res => {
				this.setState({ results: res.data.artists.artist });
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
