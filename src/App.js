import logo from './logo.svg';
import './App.css';
import React from 'react';

let count = 0;


class Counter extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1> {count} </h1>
        <button onClick={function() {
          console.log(count);
          count++;
        }}>Increment</button>
      </div>
    );
  }
}

export default Counter;