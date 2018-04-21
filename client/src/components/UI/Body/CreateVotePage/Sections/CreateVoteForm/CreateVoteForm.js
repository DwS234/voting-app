//Import external libraries
import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

//Import styles
import styles from './CreateVoteForm.css';

class CreateVoteForm extends React.Component {
	render(){
		return (
			<div className={styles.CreateVoteForm}>
				<form>
					<FormGroup>
						<FormControl type="text" placeholder="text" />
						<FormControl componentClass="textarea" placeholder="Define options. Seperate each one using comma(,)" />
					</FormGroup>
					
					<Button type="submit" bsStyle="success">Create</Button>

				</form>
			</div>
		);
	}
}

export default CreateVoteForm;