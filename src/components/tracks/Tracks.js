import React, { Component } from 'react';
import nanoid from 'nanoid';

import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

class Tracks extends Component {
  render() {
    return (
    	<Consumer>
    		{value => {
    			const { trackInfo, heading } = value;
    			
          if (trackInfo === undefined || trackInfo.length === 0) {
            return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h2 className="text-center mb-4">{heading}</h2>
                <div className="row">
                  {trackInfo.map(item => (<Track key={nanoid()} item={item} />))}
                </div>
              </React.Fragment>
            )
          }
    		}}
    	</Consumer>
    );
  }
}

export default Tracks;