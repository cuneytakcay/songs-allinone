import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../../context';

const cors = `https://cors-anywhere.herokuapp.com/`;
const rootURL = `http://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Search extends Component {
  state = {
    trackTitle: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();

    axios.get(`${cors}${rootURL}?method=track.search&track=${this.state.trackTitle}&limit=10&apikey=${key}`)
      .then(res => {
        dispatch({
          type: 'SEARCH_TRACKS',
          payload: res.data.tracks,
        });
        this.setState({ trackTitle: '' });
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