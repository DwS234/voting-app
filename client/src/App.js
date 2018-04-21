import React, { Component } from 'react';
import './App.css';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import MainPage from './components/UI/Body/MainPage/MainPage';

//Imports for external libraries
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    message: ''
  }

  componentDidMount() {
    fetch("/api").then(res => res.json()).then(message => {
      this.setState({message: message});
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/hello" render={() => (<Button bsStyle="primary">Button</Button>)} />
        <Footer />
        
      </div>
    );
  }
}

export default App;
