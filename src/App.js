import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => <Amount />;

const Euro = ({ amount }) => <p>Euro: {amount * 0.24}</p>;
const Dollars = ({ amount }) => <p>Dollars: {amount * 0.27}</p>;

class Amount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Currency Converter</h1>
        </header>
        <div className="App-body">
          <button type="button" onClick={this.onIncrement}> + </button>
          <button type="button" onClick={this.onDecrement}> - </button>
          <span>New Israeli shekel: {this.state.amount} </span>
        </div>
      </div>
    );
  }
}

export default App;
