import logo from './logo.svg';
import './App.css';
import React from 'react';

let count = 0;


class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10
    }
  }
  render() {
    const {count}  = this.state;
    return (
      <div className='App'>
        <h1> {count} </h1>
        <button onClick={() => {
          this.setState({count: count + 1});
        }}>Increment</button>
        <button onClick={() => {
          this.setState({ count: count - 1});
        }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;