import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
			<div className="container">
				<a className="navbar-brand" href="/">Music AIO</a>
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

			  <div className="collapse navbar-collapse" id="toggle-items">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item">
			        <a className="nav-link" href={`/songs`}>Songs</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href={`/artists`}>Artists</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href={`/albums`}>Albums</a>
			      </li>
			    </ul>
			  </div>
			</div>
		</nav>
	);
}

export default Navbar;