import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import Spinner from '../components/layout/Spinner'

class ArtistInfo extends Component {
  state = {
    artistInfo: {}
  }

  componentDidMount() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.props.match.params.artist}
      &api_key=${process.env.REACT_APP_LAST_FM_KEY}&format=json`)
      .then(res => {
        this.setState({
          artistInfo: res.data.artist
        })
        console.log(this.state.artistInfo)
      })
      .catch(err => console.log(err))
  }

  render() {
    const { artistInfo } = this.state

    if (artistInfo === undefined || Object.keys(artistInfo).length === 0) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4 mt-2">Go back</Link>
          <div className="card">
            <h5 className="card-header">{artistInfo.name}</h5>
            <div className="card-body">
              {
                (artistInfo.bio) ? (
                  <div>
                    <p>{artistInfo.bio.content.slice(0, 500)}...</p>
                    Read more on <a href={artistInfo.url} target="_blank"> Last.fm</a><br /> 
                    <small>Published on <Moment format="MM-DD-YYYY">{artistInfo.bio.published}</Moment></small>
                  </div>
                ) : (
                  <p>No bio has been published about this album on <a href={`${artistInfo.url}/+bio`} target="_blank"> Last.fm</a> yet.</p>
                )
              }          
            </div>
          </div>
          <ul className="list-group mt-3 mb-4">
            <li className="list-group-item">
              <strong>Similar Artists</strong>: {
                artistInfo.similar !== 0 ?
                  {artistInfo.similar.map(item => (
                    <span>{artistInfo.similar.artist.name}, </span>
                  ))} : (<span>Not available</span>) 
              }
            </li>
          </ul>
          <Link to="/" className="btn btn-dark btn-sm mb-5">Go back</Link>
        </React.Fragment>
      )
    }
  }
}

export default ArtistInfo