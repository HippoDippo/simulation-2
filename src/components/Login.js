import React from 'react';
import authLogo from '../assets/auth_logo.png';
import Button from './Button';

export default function Login(props) {
  
  let button1 = { backgroundColor: "#8AEA92",  // Styles passed in through props.
                  color: "black",              // ID: 36E
                  padding: "11px 37px" };
                                               // This is what the cool kids do.
  let button2 = { backgroundColor: "#3B5249",
                  color: "white",              // Styles passed in through props.
                  padding: "11px 27px" };      // ID: 36E
  
  // ID: 36H 
  // Buttons are nested within Login.

  // Object destructoring
  let { handleUsername, handleUserPassword, loginUser, registerUser } = props;

  return (
    <div className="login">
      <img src={authLogo} />
      <h2>Username:</h2>
        <input onChange={(e) => handleUsername(e)}></input>
      <h2>Password:</h2>
        <input onChange={(e) => handleUserPassword(e)}></input>
      <div>
        <Button onClick={() => loginUser() } styles={button1}>Login</Button>
        <Button onClick={() => registerUser() } styles={button2}>Register</Button>
      </div>
    </div>
  )
}