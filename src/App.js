import React, { Component } from "react";
import "./App.css";

const Euro = ({ amount }) => <p>Euro: {amount * 0.24}</p>;
const Dollars = ({ amount }) => <p>Dollars: {amount * 0.27}</p>;

class Amount extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button type="button" onClick={this.props.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.props.onDecrement}>
            -
          </button>
          <span>New Israeli shekel: {this.props.amount} </span>
        </div>

        {/*Rendered Here*/}
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
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
    const { amount } = this.state;
    return (
      <Amount
        amount={amount}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
      >
        <Euro amount={amount} />
        <Dollars amount={amount} />
      </Amount>
    );
  }
}

export default App;
