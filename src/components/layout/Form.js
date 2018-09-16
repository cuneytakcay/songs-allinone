import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../../context';

const rootURL = `https://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Search extends Component {
  state = {
    trackTitle: '',
    searchedTracks: [],
    trackInfo: [],
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();

    const tracks = [];

    axios.get(`${rootURL}?method=track.search&track=${this.state.trackTitle}&api_key=${key}&format=json`)
      .then(res => {
        this.setState({ searchedTracks: res.data.results.trackmatches.track });
        this.state.searchedTracks.forEach(track => {
          axios.get(`${rootURL}?method=track.getInfo&api_key=${key}&artist=${track.artist}&track=${track.name}&format=json`)
            .then(res => {
              if (res.data.track !== undefined) {
                tracks.push(res.data.track);
              }
              this.setState({ trackInfo: tracks });
              dispatch({
                type: 'SEARCH_TRACKS',
                payload: this.state.trackInfo,
              });
              this.setState({ trackTitle: '' });
            })
            .catch(err => console.log(err));
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (     
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.findTrack.bind(this, dispatch)}
            >
              <input 
                type="text"
                placeholder="Enter a track name"
                className="form-control mr-sm-2"
                name="trackTitle"
                value={this.state.trackTitle}
                onChange={this.onChange}
                required
              />
              <button className="btn btn-dark my-2 my-sm-0" type="submit">Find Track</button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;