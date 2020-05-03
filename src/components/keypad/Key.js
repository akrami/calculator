import React from 'react';

const Key = props => {
    const { value, isNum, current, result, setCurrent } = props;

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
        <button onClick={handleKeyPress}>{value}</button>
    );
}

export default Key;