import React, { Component } from 'react'

import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Song from './Song'

class Songs extends Component {
  render() {
    return (
    	<Consumer>
    		{value => {
    			const { songList, heading } = value
    			
          if (songList === undefined || songList.length === 0) {
            return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center">{heading}</h3>
                <div className="row">
                  {songList.map(item => (
                    <Song key={item.track.track_id} song={item.track} />
                  ))}
                </div>
              </React.Fragment>
            )
          }
    		}}
    	</Consumer>
    )
  }
}

export default Songs