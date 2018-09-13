import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Artist from './Artist';

const rootURL = `http://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Artists extends Component {
  state = {
    topArtists: [],
  }

  componentDidMount() {
    axios.get(`${rootURL}?method=chart.gettopartists&limit=10&api_key=${key}&format=json`)
      .then(res => {
        this.setState({ topArtists: res.data.artists.artist })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="text-center mb-4">Top 10 Artists</h2>
        <div className="row">
          {this.state.topArtists.map(item => (
            <Artist key={item.mbid} item={item} />
          ))}
        </div>
      </React.Fragment>
    );     
  }
}

export default Artists;