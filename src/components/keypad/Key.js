import React from 'react';
import styles from './Key.module.css';
import cx from 'classnames';

const Key = props => {
    const { value, handleKeyPress } = props;
    const isNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(value);

    return (
        <button onClick={() => handleKeyPress(value)} className={cx(styles.key, { [styles.numKey]: isNum })}>{value}</button>
    );
}

export default Key;