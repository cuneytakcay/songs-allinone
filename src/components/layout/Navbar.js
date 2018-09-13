import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
			<div className="container">
				<i className="fas fa-music text-light" />
				<a className="navbar-brand text-dark" href="/">&nbsp;Music AIO</a>
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
			        <a className="nav-link" href={`/tracks`}>Tracks</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href={`/artists`}>Artists</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href={`/albums`}>Albums</a>
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