import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Spinner from '../layout/Spinner';

const cors = `https://cors-anywhere.herokuapp.com/`;
const rootURL = `http://api.musixmatch.com/ws/1.1/`;
const key = process.env.REACT_APP_MUSIXMATCH_KEY;

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    axios.get(`${cors}${rootURL}track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${key}`)
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics })
        return (
          axios.get(`${cors}${rootURL}track.get?track_id=${this.props.match.params.id}&apikey=${key}`)
            .then(res => {
              this.setState({ track: res.data.message.body.track })
            })
            .catch(err => console.log(err))
        )
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state

    if (
      track === undefined || 
      lyrics === undefined || 
      Object.keys(track).length === 0 || 
      Object.keys(lyrics).length === 0
    ) {
      return (<Spinner />);
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4 mt-2">Go back</Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} / <span className="text-dark">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <pre className="card-text">{lyrics.lyrics_body}</pre>
            </div>
          </div>
          <ul className="list-group mt-3 mb-4">
            <li className="list-group-item">
              <strong>Genre</strong>: {
                track.primary_genres.music_genre_list.length !== 0 ?
                  (track.primary_genres.music_genre_list[0].music_genre.music_genre_name) : (<span>Not available</span>) 
              }
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>: <Moment format="YYYY">{track.first_release_date}</Moment>
            </li>
          </ul>
          <Link to="/" className="btn btn-dark btn-sm mb-5">Go back</Link>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;