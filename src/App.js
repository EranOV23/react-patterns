import React, { Component } from "react";
import "./App.css";

const App = () => <Amount />;

const Euro = ({ amount }) => <p>Euro: {amount * 0.24}</p>;
const Dollars = ({ amount }) => <p>Dollars: {amount * 0.27}</p>;

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
        <div>
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
          <span>New Israeli shekel: {this.state.amount} </span>
        </div>

        {/*Rendered Here*/}
        <Euro amount={this.state.amount} />
        <Dollars amount={this.state.amount} />
      </div>
    );
  }
}

export default App;
