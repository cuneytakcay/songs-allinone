import React, { Component } from 'react'

import { Consumer } from '../../context'

class Songs extends Component {
  render() {
    return (
    	<Consumer>
    		{value => {
    			return <h1>{value.heading}</h1>
    		}}
    	</Consumer>
    )
  }
}

export default Songs