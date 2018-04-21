import React from 'react';

import styles from './MainPage.css';
import Offer from './Sections/Offer/Offer';

import { Jumbotron, Well, Button } from 'react-bootstrap';

const mainPage = () => {
	return (
		<div>
			<Well className={styles.MainPage}>
				<h1>What would you like to do?</h1>
				<Button bsStyle="primary" style={{marginRight: '20px'}}>Create voting</Button>
				<Button bsStyle="warning">Explore votings</Button>
			</Well>

			<Offer />
		</div>
	);
};

export default mainPage;