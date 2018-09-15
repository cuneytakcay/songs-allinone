import React, { Component } from 'react';
import axios from 'axios';

import Genre from './Genre';
import Spinner from '../layout/Spinner';

const rootURL = `https://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Genres extends Component {
  state = {
    topGenres: [],
  }

  componentDidMount() {
    axios.get(`${rootURL}/?method=chart.gettoptags&api_key=${key}&format=json`)
      .then(res => {
        this.setState({ topGenres: res.data.tags.tag });
        this.filterGenres();
        // this.state.topArtists.forEach(artist => {
        //   this.getTopTracks(artist.name);
        // });
      })
      .catch(err => console.log(err));
  }

  // getTopTracks = artist => {
  //   axios.get(`${rootURL}?method=artist.gettoptracks&artist=${artist}&limit=3&api_key=${key}&format=json`)
  //     .then(res => {
  //       topTracks.push(res.data.toptracks);
  //       this.setState({ topTracks: topTracks });
  //     });
  // }

  filterGenres = () => {
    let genres = [];
    let last = 10;

    for (let i = 0; i < last; i++) {
      if (
        this.state.topGenres[i].name.toLowerCase() === "seen live" ||
        this.state.topGenres[i].name.toLowerCase() === "female vocalists"
      ) {
        last++;
        continue;
      }
      genres.push(this.state.topGenres[i]);
    }
    
    this.setState({ topGenres: genres });   
  }

  render() {
    const { topGenres } = this.state;

    if (topGenres === undefined || topGenres.length === 0) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <h2 className="text-center mb-4">Top 10 Genres</h2>
          <div className="row">
            {topGenres.map(item => (
              <Genre key={item.name} item={item} />
            ))}
          </div>
        </React.Fragment>
      );
    }     
  }
}

export default Genres;