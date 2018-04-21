import React from 'react';

import styles from './MainPage.css';
import Offer from './Sections/Offer/Offer';

import { Jumbotron, Well, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const mainPage = () => {
	return (
		<div>
			<Well className={styles.MainPage}>
				<h1>What would you like to do?</h1>
				<Link to="/create"><Button bsStyle="primary" style={{marginRight: '20px'}}>Create voting</Button></Link>
				<Link to="/explore"><Button bsStyle="warning">Explore votings</Button></Link>
			</Well>

			<Offer />
		</div>
	);
};

export default mainPage;