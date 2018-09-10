import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const rootURL = `http://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class ArtistInfo extends Component {
  state = {
    artistInfo: {}
  };

  componentDidMount() {
    axios.get(`${rootURL}?method=artist.getinfo&artist=${this.props.match.params.artist}&api_key=${key}&format=json`)
      .then(res => {
        this.setState({ artistInfo: res.data.artist })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { artistInfo } = this.state

    if (artistInfo === undefined || Object.keys(artistInfo).length === 0) {
      return (
        <React.Fragment>
          <h4 className="text-dark">Sorry, couldn't find the artist.</h4>
          <Link to="/" className="btn btn-dark btn-sm mb-4 mt-2">Go back</Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4 mt-2">Go back</Link>
          <div className="card">
            <h5 className="card-header">{artistInfo.name}</h5>
            <div className="card-body row">
              <div className="col-md-4">
                <img src={artistInfo.image[3]['#text']} alt={artistInfo.name} className="w-100 mb-3" />
              </div>
              <div className="col-md-8">
                {
                  (artistInfo.bio) ? (
                    <div>
                      <p>{artistInfo.bio.content.slice(0, 750)}...</p>
                      Read more on <a href={artistInfo.url} target="_blank"> Last.fm</a><br /> 
                      <small>Published on <Moment format="MM-DD-YYYY">{artistInfo.bio.published}</Moment></small>
                    </div>
                  ) : (
                    <p>No bio has been published about this album on <a href={`${artistInfo.url}/+bio`} target="_blank"> Last.fm</a> yet.</p>
                  );
                }
              </div>          
            </div>
          </div>
          <ul className="list-group mt-3 mb-4">
            <li className="list-group-item">
              <strong>Similar Artists</strong>: {
                artistInfo.similar.artist !== 0 ?
                  artistInfo.similar.artist.map(item => (
                    <span key={item.name}>{item.name}, </span>
                  )) : (<span>Not available</span>);
              }
            </li>
          </ul>
          <Link to="/" className="btn btn-dark btn-sm mb-5">Go back</Link>
        </React.Fragment>
      );
    }
  }
}

export default ArtistInfo;