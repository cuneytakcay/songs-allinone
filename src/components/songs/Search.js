import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../../context';

const rootURL = `http://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Search extends Component {
  state = {
    songTitle: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findSong = (dispatch, e) => {
    e.preventDefault();

    axios.get(`${rootURL}?method=track.search&track=${this.state.songTitle}&limit=10&apikey=${key}`)
      .then(res => {
        dispatch({
          type: 'SEARCH_SONGS',
          payload: res.data.tracks,
        });
        this.setState({ songTitle: '' });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music text-dark" /> Search for a song
              </h1>
              <form onSubmit={this.findSong.bind(this, dispatch)}>
                <div className="form-group">
                  <input 
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter a song name"
                    name="songTitle"
                    value={this.state.songTitle}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <button className="btn btn-primary btn-block btn-lg mb-5" type="submit">Find Song</button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;