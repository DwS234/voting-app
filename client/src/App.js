import React, { Component } from 'react';
import './App.css';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import MainPage from './components/UI/Body/MainPage/MainPage';
import CreateVotePage from './components/UI/Body/CreateVotePage/CreateVotePage';
import ExploreVotesPage from './components/UI/Body/ExploreVotesPage/ExploreVotesPage';

//Imports for external libraries
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  state = {
    message: ''
  }

  componentDidMount() {

   axios.post("/api/create", {title: "fsdf", options: "fsdfd"}).then(res => console.log(res))
   .catch(err => {
    console.log("Something went wrong on client while trying to make a post request to create a vote: ", err)
   });
  }

  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/create" component={CreateVotePage} />
        <Route path="/explore" component={ExploreVotesPage} />
        <Route path="/hello" render={() => (<Button bsStyle="primary">Button</Button>)} />
        <Footer />
        
      </div>
    );
  }
}

export default App;
