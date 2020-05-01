import React from 'react';
import NumKey from './keypad/NumKey';

const Keypad = props => {
    const numkeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
            <h2>Keypad</h2>
            {numkeys.map(num => <NumKey num={num} />)}
        </div>
    );
}

export default Keypad;