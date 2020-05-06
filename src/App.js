import React, { Component } from 'react';
import styles from './App.module.css';
import Screen from './components/Screen';
import Keypad from './components/Keypad';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: false,
      current: '0',
      history: []
    }
    document.addEventListener('keyup', this.handleKeyPress);
  }

  setCurrent = value => this.setState({ current: value, result: false });
  setResult = () => {
    if (this.state.result) return null;
    if (this.state.current.length > 1 && this.state.current.slice(-1) === '.' && ["+", "-", "×", "÷"].includes(this.state.current.slice(-2, -1))) return null;
    let evalResult = eval(this.state.current.replace(/×/g, '*').replace(/÷/g, '/')).toString();
    this.setState({ result: true });
    this.setState({ history: [...this.state.history, this.state.current + "=" + evalResult] });
    this.setState({ current: evalResult });
    // this.setState({ current: '0' });
  }

  handleKeyClick = value => {
    const isNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(value);

    if (isNum && this.state.current.length > 1 && this.state.current.slice(-1) === '0' && ["+", "-", "×", "÷"].includes(this.state.current.slice(-2, -1))) {
      this.setCurrent(this.state.current.slice(0, -1) + value.toString());
    } else if (!isNum && ["+", "-", "×", "÷"].includes(value) && ["+", "-", "×", "÷"].includes(this.state.current.slice(-1))) {
      this.setCurrent(this.state.current.slice(0, -1) + value.toString());
    } else if (!isNum && this.state.current.length > 1 && this.state.current.slice(-1) === '.' && ["+", "-", "×", "÷"].includes(this.state.current.slice(-2, -1))) {
      return null;
    } else {
      if ((this.state.result && isNum) || (this.state.current === '0' && isNum)) {
        this.setCurrent(value.toString());
      } else {
        this.setCurrent(this.state.current + value.toString());
      }
    }
  }

  handleKeyPress = event => {
    const allowedKeys = {
      "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "0": "0",
      "+": "+", "-": "-", "*": "×", "/": "÷"
    };
    if (event.key === "Enter" || event.key === "=") this.setResult();
    else if (Object.keys(allowedKeys).includes(event.key)) {
      this.handleKeyClick(allowedKeys[event.key]);
    }
  }

  render() {
    return (
      <div className={styles.calculator}>
        <Screen current={this.state.current} result={this.state.result} history={this.state.history} />
        <Keypad current={this.state.current} result={this.state.result} setCurrent={this.setCurrent} setResult={this.setResult} handleKeyPress={this.handleKeyClick} />
      </div>
    );
  }
}

export default App;
