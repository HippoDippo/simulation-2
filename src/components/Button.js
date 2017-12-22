import React from 'react';
import './css/Button.css';

export default function Button(props) {
  return (
    <button style={props.styles}>{props.children}</button>
  )
}