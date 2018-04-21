import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const header = () => {
	return (
		<Navbar style={{margin: '0'}}>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to="/">Voting Spot</Link>
				</Navbar.Brand>
				<Navbar.Toggle />	
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<NavItem>
						<Link to="/hello">Create</Link>
					</NavItem>

					<NavItem>
						<Link to="/hello">Explore</Link>
					</NavItem>
				</Nav>
				<Nav pullRight>
					<NavDropdown title="Hello Somebody">
						<MenuItem>My votings</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
			
		</Navbar>
	);
}

export default header;