import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Consumer } from '../../context';
import Form from './Form';


class Navbar extends Component {
	state = { artistInfo: [] };

	openArtists = (dispatch, artistInfo) => {
		this.setState({ artistInfo: artistInfo })
		dispatch({
			type: 'GET_ARTISTS',
			//payload: this.state.artistInfo,
		});
		console.log('test: ' + this.state.artistInfo);
	};

	render() {
		return (
			<Consumer>
				{value => {
					const { dispatch, artistInfo } = value;

					return (
						<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
							<div className="container">
								<i className="fas fa-drum text-light h2" />
								<h1 className="navbar-brand text-dark mt-2"><strong>&nbsp;Music AIO</strong></h1>
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
											<NavLink className="nav-link text-center" exact to={`/`} activeStyle={{borderBottom: "1px solid #fff"}}>Tracks</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className="nav-link text-center" 
												to={`/artists`} 
												activeStyle={{borderBottom: "1px solid #fff"}}
												onClick={this.openArtists.bind(this, dispatch, artistInfo)}
											>
												Artists
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink className="nav-link text-center" to={`/genres`} activeStyle={{borderBottom: "1px solid #fff"}}>Genres</NavLink>
										</li>
									</ul>
									<Form />
								</div>
							</div>
						</nav>
					);
				}}
			</Consumer>
		);
	}
}

export default Navbar;

