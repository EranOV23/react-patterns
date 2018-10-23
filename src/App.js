import React, { Component } from "react";
import "./App.css";

const Euro = ({ amount }) => <p>Euro: {amount * 0.24}</p>;
const Dollars = ({ amount }) => <p>Dollars: {amount * 0.27}</p>;

const Amount = props => {
  const { amount, onIncrement, onDecrement } = props;
  return (
    <div>
      <span>US Dollar: {amount} </span>

      <button type="button" onClick={onIncrement}>
        +
      </button>
      <button type="button" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

class App extends Component {
  state = { amount: 0 };

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };

  render() {
    return (
      <div className="App">
        <Amount
          amount={this.state.amount}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        <Euro amount={this.state.amount} />
        <Dollars amount={this.state.amount} />
      </div>
    );
  }
}

export default App;
