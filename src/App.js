import React from 'react';
import styles from './App.module.css';
import Screen from './components/Screen';
import Keypad from './components/Keypad';

function App() {
  return (
    <div className={styles.calculator}>
      <Screen />
      <Keypad />
    </div>
  );
}

export default App;
