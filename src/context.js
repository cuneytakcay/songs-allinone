import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
	state = {
		songList: [
			{song : {songName: 'People are strange'}},
			{song : {songName: 'Hello, I love you'}},
		],
		heading: 'List of Songs', 
	}

  render() {
    return (
    	<Context.Provider value={this.state}>
    		{this.props.children}
    	</Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
