//Import internal components
import CreateVoteForm from './Sections/CreateVoteForm/CreateVoteForm';

//Import external libraries
import { PageHeader, Well } from 'react-bootstrap';
import React from 'react';

const createVotePage = () => {
	return (
		<div>
			<Well>
				<PageHeader style={{textAlign: 'center'}}>Create a Vote</PageHeader>
			</Well>

			<CreateVoteForm />
		</div>
	);
};

export default createVotePage;