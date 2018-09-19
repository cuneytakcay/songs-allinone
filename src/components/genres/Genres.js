import React, { Component } from 'react';
import axios from 'axios';
import nanoid from 'nanoid';

import GenreBody from './GenreBody';
import GenreImage from './GenreImage';
// import GenreArtists from './GenreArtists';
// import GenreTracks from './GenreTracks';
// import GenreAlbums from './GenreAlbums';
import Spinner from '../layout/Spinner';

const rootURL = `https://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Genres extends Component {
  state = {
    topGenres: [],
    genreArtists: [],
  }

  componentDidMount() {
    let last = 10;
    const genres = [];

    axios.get(`${rootURL}?method=chart.gettoptags&api_key=${key}&format=json`)
      .then(res => {
        this.setState({ topGenres: res.data.tags.tag });
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
        console.log(genres)  
        Promise.all(this.state.topGenres.map(genre => {
          return axios.get(`${rootURL}?method=tag.gettopartists&tag=${genre.name}&api_key=${key}&format=json`)
        })).then(genreArtists => {
          this.setState({ genreArtists: genreArtists });
          console.log(this.state.genreArtists);
        }).catch(err => console.log(err));
      })
      .catch(err => console.log(err));
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
            {topGenres.map(genre => (
              <GenreBody key={nanoid()} genre={genre} />
            ))}
          </div>
        </React.Fragment>
      );
    }     
  }
}

export default Genres;