import React, { Component } from 'react';

import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Artist from './Artist';

class Artists extends Component {
  render() {
    return (
    	<Consumer>
    		{value => {
    			const { results, heading } = value;
    			
          if (results === undefined || results.length === 0) {
            return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h2 className="text-center mb-4">{heading}</h2>
                <div className="row">
                  {results.map(item => (
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