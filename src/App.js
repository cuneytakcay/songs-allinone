import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from './context'
import Navbar from './components/layout/Navbar'
import Lyrics from './components/lyrics/Lyrics'
import AlbumInfo from './components/albums/AlbumInfo'
import ArtistInfo from './components/artists/ArtistInfo'
import Home from './components/layout/Home'

import './App.css'

class App extends Component {
  render() {
    return (
    	<Provider>
	    	<Router>
		    	<React.Fragment>
			    	<Navbar />
			      <div className="container">
			        <Switch>
			        	<Route exact path="/" component={Home} />
			        	<Route exact path="/lyrics/song/:id" component={Lyrics} />
			        	<Route exact path="/album/:artist/:album" component={AlbumInfo} />
			        	<Route exact path="/artist/:name" component={ArtistInfo} />
			        </Switch>
			      </div>
		      </React.Fragment>
	      </Router>
      </Provider>
    )
  }
}

export default App
