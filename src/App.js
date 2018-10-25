import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => <Amount />;
const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

class Amount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
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
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
          <span>US Dollar: {this.state.amount} </span>
          <Euro amount={this.state.amount} />
          <Pound amount={this.state.amount} />
        </div>
      </div>
    );
  }
}

export default App;
