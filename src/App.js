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
  }

  setCurrent = value => this.setState({ current: value, result: false });
  setResult = () => {
    if (this.state.result) return null;
    if(this.state.current.length>1 && this.state.current.slice(-1)==='.' && ["+", "-", "×", "÷"].includes(this.state.current.slice(-2,-1))) return null;
    let evalResult = eval(this.state.current.replace(/×/g,'*').replace(/÷/g,'/')).toString();
    this.setState({ result: true });
    this.setState({ history: [...this.state.history, this.state.current+"="+evalResult] });
    this.setState({ current: evalResult });
    // this.setState({ current: '0' });
  }

  render() {
    return (
      <div className={styles.calculator}>
        <Screen current={this.state.current} result={this.state.result} history={this.state.history} />
        <Keypad current={this.state.current} result={this.state.result} setCurrent={this.setCurrent} setResult={this.setResult} />
      </div>
    );
  }
}

export default App;
