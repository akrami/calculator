import React from 'react';
import Key from './keypad/Key';

const Keypad = props => {
    const { current, result, setCurrent, setResult } = props;
    const numkeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
            {numkeys.map(num => <Key key={num} value={num} isNum={true} current={current} result={result} setCurrent={setCurrent} />)}
            <Key value='.' current={current} result={result} setCurrent={setCurrent} />
            <Key value='+' current={current} result={result} setCurrent={setCurrent} />
            <Key value='-' current={current} result={result} setCurrent={setCurrent} />
            <Key value='×' current={current} result={result} setCurrent={setCurrent} />
            <Key value='÷' current={current} result={result} setCurrent={setCurrent} />
            <button onClick={setResult}>=</button>
        </div>
    );
}

export default Keypad;