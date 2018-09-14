import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Tracks from './components/tracks/Tracks';
import Artists from './components/artists/Artists';
import Genres from './components/genres/Genres';
import ArtistInfo from './components/artists/ArtistInfo';
import AlbumInfo from './components/albums/AlbumInfo';

import './App.css';

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
			        	<Route exact path="/tracks" component={Tracks} />
			        	<Route exact path="/artists" component={Artists} />
			        	<Route exact path="/genres" component={Genres} />
			        	<Route exact path="/artist/:name" component={ArtistInfo} />
			        	<Route exact path="/album/:artist/:title" component={AlbumInfo} />
			        </Switch>
			      </div>
		      </React.Fragment>
	      </Router>
      </Provider>
    );
  }
}

export default App;
