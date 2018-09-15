import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
			<div className="container">
				<i className="fas fa-music text-light" />
				<NavLink className="navbar-brand text-dark" to="/">&nbsp;Music AIO</NavLink>
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
			        <NavLink className="nav-link rounded pl-2 m-1" to={`/tracks`} activeStyle={{border: "1px solid white"}}>Tracks</NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link rounded pl-2 m-1" to={`/artists`} activeStyle={{border: "1px solid white"}}>Artists</NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link rounded pl-2 m-1" to={`/genres`} activeStyle={{border: "1px solid white"}}>Genres</NavLink>
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