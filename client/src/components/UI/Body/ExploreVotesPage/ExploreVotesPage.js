import React from 'react';
import { Well, PageHeader } from 'react-bootstrap';
 
import styles from './ExploreVotesPage.css';
import VotesList from './Sections/VotesList/VotesList';

class ExploreVotesPage extends React.Component {
	render() {
		return (
			<div className={styles.ExploreVotesPage}>
				<Well>
					<PageHeader>Explore votes</PageHeader>
				</Well>

				<VotesList />
			</div>
		);
	}
}

export default ExploreVotesPage;