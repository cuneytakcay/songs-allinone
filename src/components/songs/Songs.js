import React, { Component } from 'react'

import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'

class Songs extends Component {
  render() {
    return (
    	<Consumer>
    		{value => {
    			const { songList } = value
    			
                if (songList === undefined || songList.length === 0) {
                    return <Spinner />
                } else {
                    return <h1>Song List</h1>
                }
    		}}
    	</Consumer>
    )
  }
}

export default Songs