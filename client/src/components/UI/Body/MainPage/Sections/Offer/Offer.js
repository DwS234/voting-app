import React from 'react';

import { Alert, FormGroup, FormControl, PageHeader} from 'react-bootstrap';

import styles from './Offer.css';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class Offer extends React.Component {
	
	render() {
		return (
			<div>
				<Alert bsStyle="warning">
					Some features (for example creating a votings) require authentication
				</Alert>
				
				<PageHeader className={styles.PageHeader}>Log in to authenticate</PageHeader>
				<div className={styles.FormContainer}>
					<Link to="auth/twitter"><a class="btn btn-info"> <span class="fa fa-twitter"></span> Twitter</a></Link>
				</div>		
			</div>
		);
	}
}

export default withRouter(Offer);