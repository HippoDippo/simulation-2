import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      userNameInput: '',
      userPasswordInput: ''
    }
  
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleUsername(event) {
    this.setState({
      userNameInput: event.target.value
    })
  }

  handleUserPassword(event) {
    this.setState({
      userPassword: event.target.value
    })
  }

  loginUser() {
    
  }

  registerUser() {
    
  }

  render() {
    return (
      <div className="App">
        <Login 
         handleUsername={this.handleUsername}
         handleUserPassword={this.handleUserPassword}
         loginUser={this.loginUser}
         registerUser={this.registerUser}
        />
      </div>
    );
  }
}

export default App;