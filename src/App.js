import React, { Component } from "react";
import "./App.css";

const Euro = ({ amount }) => <p>Euro: {amount * 0.24}</p>;
const Dollars = ({ amount }) => <p>Dollars: {amount * 0.27}</p>;

const withAmount = currencyComponents =>
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

          {currencyComponents.map(CurrencyComponent => (
            <CurrencyComponent amount={this.state.amount} />
          ))}
        </div>
      );
    }
  };

const CurrenciesWithAmount = withAmount([Euro, Dollars]);

const App = () => <CurrenciesWithAmount />;

export default App;
