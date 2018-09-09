import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from './context'
import Navbar from './components/layout/Navbar'
import Lyrics from './components/songs/Lyrics'
import AlbumInfo from './components/songs/AlbumInfo'
import Home from './pages/Home'

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
			        </Switch>
			      </div>
		      </React.Fragment>
	      </Router>
      </Provider>
    )
  }
}

export default App
