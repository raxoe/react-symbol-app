import { NavLink } from 'react-router-dom';

const Header = () => {
	const activeStyle = { color: '#F15B2A' };
	return (
		<nav>
			<NavLink to="/" >Home</NavLink>
			{/* <NavLink to="/Courses" activeStyle={activeStyle}>Courses</NavLink> */}
			<NavLink to="/AboutPage">About</NavLink> 
		</nav>
	)
}

export default Header;