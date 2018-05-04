import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Error extends React.Component {

	state = {
		show: true
	}

	onCloseButtonClickedHandler = () => {
		this.setState({show: false});
		this.props.history.push("/");
	}

	render(){
		return(
			<Modal show={this.state.show} onHide={this.onCloseButtonClickedHandler}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{this.props.message}
				</Modal.Body>
				
				<Modal.Footer>
					<Button onClick={this.onCloseButtonClickedHandler}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default withRouter(Error);