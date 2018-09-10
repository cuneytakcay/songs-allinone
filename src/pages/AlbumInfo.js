import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import Spinner from '../components/layout/Spinner'

class AlbumInfo extends Component {
  state = {
    albumInfo: {}
  }

  componentDidMount() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_LAST_FM_KEY}
      &artist=${this.props.match.params.artist}&album=${this.props.match.params.album}&format=json`)
      .then(res => {
        this.setState({
          albumInfo: res.data.album
        })
        console.log(this.state.albumInfo)
      })
      .catch(err => console.log(err))
  }

  render() {
    const { albumInfo } = this.state

    if (albumInfo === undefined || Object.keys(albumInfo).length === 0) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4 mt-2">Go back</Link>
          <div className="card">
            <h5 className="card-header">
              {albumInfo.name} / <span className="text-dark">{albumInfo.artist}</span>
            </h5>
            <div className="card-body row">
              <div className="col-md-4">
                <img src={albumInfo.image[3]['#text']} alt={albumInfo.name} className="w-100 mb-3" />
              </div>
              <div className="col-md-8">
                {
                  (albumInfo.wiki) ? (
                    <div>
                      <p>{albumInfo.wiki.content.slice(0, 500)}...</p>
                      Read more on <a href={albumInfo.url} target="_blank"> Last.fm</a><br /> 
                      <small>Published on <Moment format="MM-DD-YYYY">{albumInfo.wiki.published}</Moment></small>
                    </div>
                  ) : (
                    <p>No wiki has been published about this album on <a href={`${albumInfo.url}/+wiki`} target="_blank"> Last.fm</a> yet.</p>
                  )
                }
              </div>          
            </div>
          </div>
          <div className="card mt-3 mb-4">
            <h5 className="card-header">Track List</h5>
            <div className='card-body'>
              {
                (albumInfo.tracks.track.length > 0) ? (
                  <ol>
                    {albumInfo.tracks.track.map(item => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ol>
                ) : (
                  <p>No tracks listed</p>
                )
              }
            </div>
          </div>
          <Link to="/" className="btn btn-dark btn-sm mb-5">Go back</Link>
        </React.Fragment>
      )
    }
  }
}

export default AlbumInfo