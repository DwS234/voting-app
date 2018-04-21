import React from 'react';

import { Alert, FormGroup, FormControl, PageHeader} from 'react-bootstrap';

const offer = () => {
	return (
		<div>
			<Alert bsStyle="warning">
				Some features (for example creating a votings) require authentication
			</Alert>
			
			<PageHeader style={{textAlign: 'center'}}>Log in to authenticate</PageHeader>

			<div style={{
				width: '50%',
				margin: '0 auto'
			}}>
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