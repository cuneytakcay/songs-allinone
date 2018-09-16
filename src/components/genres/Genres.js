import React, { Component } from 'react';
import axios from 'axios';
import nanoid from 'nanoid';

import Genre from './Genre';
import Spinner from '../layout/Spinner';

const rootURL = `https://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class Genres extends Component {
  state = {
    topGenres: [],
    genreArtists: [],
  }

  componentDidMount() {
    const genres = [];
    const genreArtists = [];
    let last = 10;

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
        console.log(this.state.topGenres)
        if (this.state.topGenres.length === 10) {
          this.state.topGenres.forEach(genre => {
            axios.get(`${rootURL}?method=tag.gettopartists&tag=${genre.name}&api_key=${key}&format=json`)
              .then(res => {
                this.setState({ genreArtists: res.data });
                genreArtists.push(this.state.genreArtists);
                this.setState({ genreArtists: genreArtists });
                console.log(this.state.genreArtists)
              });
          });
        }
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
            {topGenres.map(item => (
              <Genre key={nanoid()} item={item} />
            ))}
          </div>
        </React.Fragment>
      );
    }     
  }
}

export default Genres;