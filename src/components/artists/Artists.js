import React, { Component } from 'react';
import axios from 'axios';

import Artist from './Artist';
import Spinner from '../layout/Spinner';

const rootURL = `https://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Artists extends Component {
  state = {
    topArtists: [],
    topTracks: [],
  }

  componentDidMount() {
    const topTracks = [];

    axios.get(`${rootURL}?method=chart.gettopartists&limit=10&api_key=${key}&format=json`)
      .then(res => {
        this.setState({ topArtists: res.data.artists.artist });
        this.state.topArtists.forEach(artist => {
          axios.get(`${rootURL}?method=artist.gettoptracks&artist=${artist.name}&limit=3&api_key=${key}&format=json`)
            .then(res => {
              topTracks.push(res.data.toptracks);
              this.setState({ topTracks: topTracks });
            });
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { topTracks } = this.state;
    
    if (topTracks === undefined || topTracks.length === 0) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <h2 className="text-center mb-4">Top 10 Artists</h2>
          <div className="row">
            {topTracks.map(item => (
              <Artist key={item.track[0].artist.mbid} item={item} />
            ))}
          </div>
        </React.Fragment>
      ); 
    }    
  }
}

export default Artists;