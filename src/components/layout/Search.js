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
              console.log(this.state.trackInfo)
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
            <div className="card card-body mb-4 p-4 shadow-sm">
              <h1 className="text-center display-4 mb-3">Search for a track</h1>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input 
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter a track name"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <button className="btn btn-dark btn-block btn-lg mb-3" type="submit">Find Track</button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;