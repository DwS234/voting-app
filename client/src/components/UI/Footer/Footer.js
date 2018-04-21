import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Footer.css';

const footer = () => {
	return (
		<Navbar className={styles.Footer} fixedBottom>
			<div className={styles.FooterContentContainer}>
				<div className={styles.SocialMediaContainer}>
					<a href="https://www.linkedin.com/in/dawid-gonisiewski-936366157/" target="_blank"><i className={styles.SocialMedia + " " + "fab fa-linkedin-in"}></i></a>
					<a href="https://github.com/DwS234" target="_blank"><i className={styles.SocialMedia + " " + "fab fa-github"}></i></a>
					<a href="https://www.freecodecamp.org/dws234" target="_blank"><i className={styles.SocialMedia + " " + "fab fa-free-code-camp"}></i></a>
				</div>
			</div>
		</Navbar>
	);
}

export default footer;