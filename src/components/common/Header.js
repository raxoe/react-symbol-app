import { NavLink } from 'react-router-dom';

const Header = () => {
	const activeStyle = { color: '#F15B2A' };
	return (
		// <nav>
		// 	<NavLink to="/" >Home</NavLink>
		// 	{/* <NavLink to="/Courses" activeStyle={activeStyle}>Courses</NavLink> */}
		// 	<NavLink to="/AboutPage">About</NavLink> 
		// </nav>

		<nav className="navbar navbar-expand-lg navbar-light bg-light">			
			<NavLink to="/" className="navbar-brand">Home</NavLink>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>			

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">						
						<NavLink to="/" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
					</li>
					<li className="nav-item">
						
						<NavLink to="/CoursesPage" className="nav-link">Courses</NavLink>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							About
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">							
							<NavLink to="/AboutPage" className="dropdown-item">Mission</NavLink>
							<a className="dropdown-item" href="#">Vision</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Testimonial</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">Premium</a>
					</li>
				</ul>
				{/* <form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form> */}
			</div>
		</nav>

	)
}

export default Header;