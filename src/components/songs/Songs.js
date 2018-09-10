import React, { Component } from 'react';

import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Song from './Song';

class Songs extends Component {
  render() {
    return (
    	<Consumer>
    		{value => {
    			const { tracks, heading } = value;
    			
          if (tracks === undefined || tracks.track.length === 0) {
            return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h2 className="text-center mb-4">{heading}</h2>
                <div className="row">
                  {tracks.map(item => (
                    <Song key={item.track.name} song={item.track} />
                  ))}
                </div>
              </React.Fragment>
            )
          }
    		}}
    	</Consumer>
    );
  }
}

export default Songs;