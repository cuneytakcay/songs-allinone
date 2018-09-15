import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
			<div className="container">
				<i className="fas fa-music text-light" />
				<Link className="navbar-brand text-dark" to="/">&nbsp;Music AIO</Link>
				<button 
					className="navbar-toggler" 
					type="button" 
					data-toggle="collapse" 
					data-target="#toggle-items" 
					aria-controls="toggle-items" 
					aria-expanded="false" 
					aria-label="Toggle navigation"
				>
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse ml-3" id="toggle-items">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item">
			        <Link className="nav-link" to={`/tracks`}>Tracks</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to={`/artists`}>Artists</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to={`/genres`}>Genres</Link>
			      </li>
			    </ul>
			    <form className="form-inline my-2 my-lg-0">
			      <input className="form-control mr-sm-2" type="text" placeholder="Enter a track name" />
			      <button className="btn btn-dark my-2 my-sm-0" type="submit">
			      	<i className="fas fa-search"></i>
			      </button>
			    </form>
			  </div>
			</div>
		</nav>
	);
}

export default Navbar;