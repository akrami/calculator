import React from 'react';
import styles from './Key.module.css';
import cx from 'classnames';

const Key = props => {
    const { value, current, result, setCurrent } = props;
    const isNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(value);

    const handleKeyPress = () => {
        if (isNum && current.length > 1 && current.slice(-1) === '0' && ["+", "-", "×", "÷"].includes(current.slice(-2, -1))) {
            setCurrent(current.slice(0, -1) + value.toString());
        } else if (!isNum && ["+", "-", "×", "÷"].includes(value) && ["+", "-", "×", "÷"].includes(current.slice(-1))) {
            setCurrent(current.slice(0, -1) + value.toString());
        } else if (!isNum && current.length > 1 && current.slice(-1) === '.' && ["+", "-", "×", "÷"].includes(current.slice(-2, -1))) {
            return null;
        } else {
            if ((result && isNum) || (current === '0' && isNum)) {
                setCurrent(value.toString());
            } else {
                setCurrent(current + value.toString());
            }
        }
    }
    return (
        <button onClick={handleKeyPress} className={cx(styles.key, {[styles.numKey]: isNum})}>{value}</button>
    );
}

export default Key;