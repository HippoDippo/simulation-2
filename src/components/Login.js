import React from 'react';
import authLogo from '../assets/auth_logo.png';
import Button from './Button';

export default function Login(props) {
  
  let button1 = { backgroundColor: "#8AEA92",  // Styles passed in through props.
                  color: "black",              // ID: 36E
                  padding: "11px 37px" };
  
  let button2 = { backgroundColor: "#3B5249",  // Styles passed in through props.
                  color: "white",              // ID: 36E
                  padding: "11px 27px"};
  
  // ID: 36H 
  // Button is nested within Login.

  return (
    <div className="login">
      <img src={authLogo} />
      <h2>Username:</h2>
        <input></input>
      <h2>Password:</h2>
        <input></input>
      <div>
        <Button styles={button1}>Login</Button>
        <Button styles={button2}>Register</Button>
      </div>
    </div>
  )
}

