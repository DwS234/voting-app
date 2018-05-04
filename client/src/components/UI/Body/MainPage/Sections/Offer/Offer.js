import React from 'react';

import { Alert, FormGroup, FormControl, PageHeader} from 'react-bootstrap';

import styles from './Offer.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Offer extends React.Component {
	

	render() {
		return (
			<div>
				<Alert bsStyle="warning">
					Some features (for example creating a votings) require authentication
				</Alert>
				
				<PageHeader className={styles.PageHeader}>Log in to authenticate</PageHeader>
				<div className={styles.FormContainer}>
					<a href="./auth/twitter" class="btn btn-info"> <span class="fa fa-twitter"></span> Twitter</a>
				</div>		
			</div>
		);
	}
}

export default withRouter(Offer);