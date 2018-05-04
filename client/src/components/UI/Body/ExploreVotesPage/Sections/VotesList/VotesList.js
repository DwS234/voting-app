import React from 'react';

import { Panel, Tab, Nav, NavItem, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';

import styles from './VotesList.css';
import * as actions from '../../../../../../store/actions/actions';

import VoteContent from '../VoteContent/VoteContent';

class VotesList extends React.Component {

	componentWillMount() {
		console.log(this.props.votes);
	}

	// TO DO: Return options to VoteContent with key-value pair("name": number)
	render() {
		return (
			<Panel className={styles.VotesList}>
				<Panel.Body>
					<Tab.Container defaultActiveKey={0} >
						<Row>
							<Col sm={4}>
      							<Nav bsStyle="pills" stacked>
        							{this.props.votes.map( (vote, index) => {
        								return <NavItem eventKey={index}>{vote.title}</NavItem>
        							})}
      							</Nav>
    						</Col>
    						<Col sm={8}>
      							<Tab.Content animation>
        							{this.props.votes.map( (vote, index) => {
        								
										console.log(index);
        								return <Tab.Pane mountOnEnter unmountOnExit eventKey={index}><VoteContent options={vote.options} title={vote.title}/></Tab.Pane>
        							})}
      							</Tab.Content>
    						</Col>
						</Row>
					</Tab.Container>
				</Panel.Body>
			</Panel>
		);
	}
}

const mapStateToProps = state => {
	return {
		votes: state.votes
	}
}

export default connect(mapStateToProps)(VotesList);