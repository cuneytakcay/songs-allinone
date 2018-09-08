import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import Spinner from '../layout/Spinner'

class Lyrics extends Component {
  state = {
    song: {},
    lyrics: {},
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`)
      .then(res => {
        this.setState({
          lyrics: res.data.message.body.lyrics
        })
        return (
          axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`)
            .then(res => {
              this.setState({
                song: res.data.message.body.track
              })
            })
            .catch(err => console.log(err))
        )
      })
      .catch(err => console.log(err))
  }

  render() {
    const { song, lyrics } = this.state

    if (
      song === undefined || 
      lyrics === undefined || 
      Object.keys(song).length === 0 || 
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4 mt-2">Go back</Link>
          <div className="card">
            <h5 className="card-header">
              {song.track_name} / <span className="text-dark">{song.artist_name}</span>
            </h5>
            <div className="card-body">
              <pre className="card-text">{lyrics.lyrics_body}</pre>
            </div>
          </div>
          <ul className="list-group mt-3 mb-5">
            <li className="list-group-item">
              <strong>Song Genre</strong>: {
                song.primary_genres.music_genre_list.length !== 0 ?
                  (song.primary_genres.music_genre_list[0].music_genre.music_genre_name) : (<span>Not available</span>) 
              }
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>: {song.explicit === 0 ? 'No' : 'Yes'}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>: <Moment format="YYYY">{song.first_release_date}</Moment>
            </li>
          </ul>
        </React.Fragment>
      )
    }
  }
}

export default Lyrics