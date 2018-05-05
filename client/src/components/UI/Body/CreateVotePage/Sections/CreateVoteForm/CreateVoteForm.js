//Import external libraries
import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../../../store/actions/actions';

//Import styles
import styles from './CreateVoteForm.css';

//Import internal components/libraries
import Error from '../../../../../../containers/Error/Error';

class CreateVoteForm extends React.Component {
	state = {
		title: '',
		options: null,
		error: null
	}

	onTitleChangedHandler = (e) => {
		this.setState({title: e.target.value});
	};

	onOptionsChangedHandler = (e) => {
		const optionsString = e.target.value;
		const optionsArray = optionsString.split(",");
		const optionsObject = optionsArray.map(option => {
			return {
				[option.trim()]: 0
			};
		});
		this.setState({options: optionsObject});
	};

	onFormSubmitHandler = (e) => {
		e.preventDefault();

		axios.post("/api/create", {title: this.state.title, options: this.state.options})
		.then(res => {
			console.log(res.data);
			this.props.onCreateVote(res.data);
		}).catch(err => {
			this.setState({error: err.message});
		});
		
	}

	render(){
		return (
			<div className={styles.CreateVoteForm}>
				<form onSubmit={this.onFormSubmitHandler}>
					<FormGroup>
						<FormControl type="text" placeholder="text" onChange={this.onTitleChangedHandler}/>
						<FormControl componentClass="textarea" placeholder="Define options. Seperate each one using comma(,)" onChange={this.onOptionsChangedHandler}/>
					</FormGroup>
					
					<Button type="submit" bsStyle="success">Create</Button>

				</form>
				{this.state.error ? <Error title="Something went wrong :(" message={this.state.error} /> : null}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateVote: (vote) => dispatch(actions.createVote(vote))
	}
}

export default withRouter(connect(null, mapDispatchToProps)(CreateVoteForm));