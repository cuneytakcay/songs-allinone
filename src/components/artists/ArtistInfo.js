import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import nanoid from 'nanoid';

import Spinner from '../layout/Spinner';

const rootURL = `https://ws.audioscrobbler.com/2.0/`;
const key = process.env.REACT_APP_LAST_FM_KEY;

class ArtistInfo extends Component {
  state = {
    artist: {}
  };

  componentDidMount() {
    axios.get(`${rootURL}?method=artist.getinfo&artist=${this.props.match.params.name}&api_key=${key}&format=json`)
      .then(res => {
        this.setState({ artist: res.data.artist });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { artist } = this.state

    if (artist === undefined || Object.keys(artist).length === 0) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/artists" className="btn btn-dark btn-sm mb-4 mt-2">Top 10 Artists</Link>
          <div className="card">
            <h5 className="card-header">{artist.name}</h5>
            <div className="card-body row">
              <div className="col-md-4">
                <img src={artist.image[3]['#text']} alt={artist.name} className="w-100 mb-3" />
              </div>
              <div className="col-md-8">
                {
                  (artist.bio) ? (
                    <div>
                      <p>{artist.bio.content.slice(0, 750)}...</p>
                      Read more on <a href={artist.url} target="_blank"> Last.fm</a>&nbsp;
                      <i className="fab fa-lastfm-square text-primary"></i>
                      <br /> 
                      <small>Published on <Moment format="MM-DD-YYYY">{artist.bio.published}</Moment></small>
                    </div>
                  ) : (
                    <p>No bio has been published about this album on <a href={`${artist.url}/+bio`} target="_blank"> Last.fm</a> yet.</p>
                  )
                }
              </div>          
            </div>
          </div>
          <ul className="list-group mt-3 mb-4">
            <li className="list-group-item">
              <strong>Similar Artists</strong>: {
                artist.similar.artist !== 0 ?
                  artist.similar.artist.map(item => (
                    <Link to={`/artist/${item.name}`} onClick={this.componentDidMount}>
                      <img 
                        src={item.image[3]['#text']}
                        alt={item.name}
                        key={nanoid()}
                        style={{ width: '75px', margin: '0 10px' }}
                      />
                    </Link>
                  )) : (<span>Not available</span>)
              }
            </li>
          </ul>
          <Link to="/artists" className="btn btn-dark btn-sm mb-5">Top 10 Artists</Link>
        </React.Fragment>
      );
    }
  }
}

export default ArtistInfo;