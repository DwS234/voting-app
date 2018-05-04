import React from 'react';

import styles from './VoteContent.css';

import { Button, Row, Col, InputGroup, FormControl, FormGroup} from 'react-bootstrap';
import axios from 'axios';
import * as actions from '../../../../../../store/actions/actions';
import { connect } from 'react-redux';

import { Chart } from 'react-google-charts';

class VoteContent extends React.Component {

	state = {
		pickedOption: '',
		pickedOptionCounter: 0,
		options: []
	};

	componentWillMount() {
		console.log(this.props.options);
		this.setState({
			options: this.props.options
		});
	}

	onVotedHandler = (e) => {
		e.preventDefault();


		axios.post("/api/update", {conditions: {
			title: this.props.title
		}, updates: {
			options: this.state.options.map(option => {
				const optionName = Object.getOwnPropertyNames(option)[0];
				if(optionName === this.state.pickedOption)
				{
					option[optionName] = parseInt(option[optionName]) + 1;
				}
				return option;
			})
		}}).then(res => {
			this.props.onUpdateVote(res.data);
		}).catch(err => {
			console.log(err);
		}) ;
	}

	onVoteChanged = (e) => {
		console.log(e.target.value);
		this.setState({pickedOption: e.target.value});
	}

	render() {

			let optionsArray = this.props.options.map(option => {
				return [
					Object.getOwnPropertyNames(option)[0],
					option[Object.getOwnPropertyNames(option)[0]]
				];
			});
			optionsArray.unshift(['Title of option', 'Number of vote']);
			console.log(optionsArray);
		return(
			<div>
				<form onSubmit={this.onVotedHandler}>
					
					{this.props.options.map(option => {

						return (
							<FormGroup>
								<InputGroup>
									<InputGroup.Addon>
										<input type="radio" name="option" value={Object.getOwnPropertyNames(option)[0]} onClick={this.onVoteChanged}/>
									</InputGroup.Addon>
									<FormControl.Static className={styles.Option}>{Object.getOwnPropertyNames(option)[0]}</FormControl.Static>
								
								</InputGroup>
									
							</FormGroup>
						);
					})}
					<Button type="submit" bsStyle="success">Vote</Button>
				</form>

				 <Chart
          chartType="PieChart"
          data={optionsArray}
          options={{}}
          graph_id="ScatterChart"
          width="100%"
          height="200px"
          legend_toggle
        />
			</div>	
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onUpdateVote: (updatedVote) => dispatch(actions.updateVote(updatedVote))
	}
}

export default connect(null, mapDispatchToProps)(VoteContent);