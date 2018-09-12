import React, { Component } from 'react';

import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Artist from './Artist';

class Artists extends Component {
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
                  {trackInfo.map(item => (
                    <Artist key={item.mbid} item={item} />
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

export default Artists;