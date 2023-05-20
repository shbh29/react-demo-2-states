import logo from './logo.svg';
import './App.css';
import React from 'react';

class Counter extends React.Component {
  shouldComponentUpdate() {
    console.log(this.props.i);
    return true;
  }
  render() {
    return (
      <h2> Sub Component Render Counter: {this.props.i}</h2>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 10
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({i: this.state.i + 1});
    }, 2000);
  }
  render() {
    return (
      <>
        <h1> Main Componenet</h1>
        <Counter i={this.state.i} />
      </>
    )
  }
}

export default App;