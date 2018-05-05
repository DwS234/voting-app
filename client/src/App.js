import React, { Component } from 'react';
import styles from './App.css';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import MainPage from './components/UI/Body/MainPage/MainPage';
import CreateVotePage from './components/UI/Body/CreateVotePage/CreateVotePage';
import ExploreVotesPage from './components/UI/Body/ExploreVotesPage/ExploreVotesPage';
import { connect } from 'react-redux';
import * as actions from './store/actions/actions';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

//Imports for external libraries
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class App extends Component {
  componentWillMount() {
    this.props.onFetchVotes();
    axios.get("/api/getVotings").then(res => console.log(res)).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.Content}>
          <Route path="/" exact component={MainPage} />
          <Route path="/create" component={CreateVotePage} />
          <Route path="/explore" component={ExploreVotesPage} />
          <Route path="/hello" render={() => (<Button bsStyle="primary">Button</Button>)} />
        </div>
        
        <Footer className={styles.Footer}/>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchVotes: () => dispatch(actions.fetchVotes())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
