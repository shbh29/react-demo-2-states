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
      i: 10,
      hasError: false
    }
  }
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({i: this.state.i + 1});
    }, 2000);
  }
  componentWillUnmount() {
    console.log(` called will unmput ${this.timerId}`);
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
  render() {
    console.log(this.state.hasError);
    if (this.state.hasError) {
      return (
        <h1> Error Occured Shubham! </h1>
      )
    }
    return (
      <>
        <DisplayMainComponenet i={this.state.i}/>
      </>
    )
  }
}

function DisplayMainComponenet(props) {
  const {i} = props;
  console.log(i);
  if (i > 20) {
    throw new Error("Error Thrown Shubham")
  }
  
  return (
    <h1> Main Componenet</h1>
  );
}

export default App;