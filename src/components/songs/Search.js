import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Spinner from '../layout/Spinner'
import { Consumer } from '../../context'

class Search extends Component {
  state = {
    songTitle: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  findSong = (dispatch, e) => {
    e.preventDefault()

    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`)
      .then(res => {
        dispatch({
          type: 'SEARCH_SONGS',
          payload: res.data.message.body.track_list,
        })
        this.setState({ songTitle: '' })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value

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
          )
        }}
      </Consumer>
    )
  }
}

export default Search