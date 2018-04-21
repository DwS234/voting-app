import React from 'react';

import { Panel, Tab, Nav, NavItem, Row, Col } from 'react-bootstrap';

import styles from './VotesList.css';

class VotesList extends React.Component {
	render() {
		return (
			<Panel className={styles.VotesList}>
				<Panel.Body>
					<Tab.Container defaultActiveKey="first">
						<Row>
							<Col sm={4}>
      							<Nav bsStyle="pills" stacked>
        							<NavItem eventKey="first">Tab 1</NavItem>
        							<NavItem eventKey="second">Tab 2</NavItem>
      							</Nav>
    						</Col>
    						<Col sm={8}>
      							<Tab.Content animation>
        							<Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
        							<Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
      							</Tab.Content>
    						</Col>
						</Row>
					</Tab.Container>
				</Panel.Body>
			</Panel>
		);
	}
}

export default VotesList;