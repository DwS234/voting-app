import React from 'react';

import { Alert, FormGroup, FormControl, PageHeader} from 'react-bootstrap';

import styles from './Offer.css';

const offer = () => {
	return (
		<div>
			<Alert bsStyle="warning">
				Some features (for example creating a votings) require authentication
			</Alert>
			
			<PageHeader className={styles.PageHeader}>Log in to authenticate</PageHeader>

			<div className={styles.FormContainer}>
				<form>
					<FormGroup>
						<FormControl type="text" placeholder="username" />
						<FormControl type="password" placeholder="password" />
					</FormGroup>
				</form>	
			</div>		
		</div>
	);
}

export default offer;