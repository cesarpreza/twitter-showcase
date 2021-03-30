import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
			<div>
				<nav className='navbar navbar-dark navbar-expand-sm'>
					<h3 className='navbar-brand'>Tweet Finder</h3>
					<button
						className='navbar-toggler'
						data-toggle='collapse'
						data-target='#navbarMenu'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarMenu'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<Link className='nav-link' to='/'>
									<button className='btn btn-secondary btn-sm'>Home</button>
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/search'>
									<button className='btn btn-secondary btn-sm'>Search</button>
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/random'>
									<button className='btn btn-secondary btn-sm'>
										Random Tweet
									</button>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
}

export default Navbar;
