import React from 'react';
import Key from './keypad/Key';
import styles from './Keypad.module.css';

const Keypad = props => {
    const { current, result, setCurrent, setResult, handleKeyPress } = props;
    return (

        <table>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Key value="÷" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                </tr>
                <tr>
                    <td><Key value="7" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="8" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="9" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="×" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                </tr>
                <tr>
                    <td><Key value="4" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="5" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="6" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="-" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                </tr>
                <tr>
                    <td><Key value="1" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="2" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="3" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="+" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                </tr>
                <tr>
                    <td><Key value="." isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td><Key value="0" isNum={true} current={current} result={result} setCurrent={setCurrent} handleKeyPress={handleKeyPress} /></td>
                    <td colSpan="2"><button onClick={setResult} className={styles.resultKey}>=</button></td>
                </tr>
            </tbody>
        </table>
        // <div>
        //     {numkeys.map(num => <Key key={num} value={num} isNum={true} current={current} result={result} setCurrent={setCurrent} />)}
        //     <Key value='.' current={current} result={result} setCurrent={setCurrent} />
        //     <Key value='+' current={current} result={result} setCurrent={setCurrent} />
        //     <Key value='-' current={current} result={result} setCurrent={setCurrent} />
        //     <Key value='×' current={current} result={result} setCurrent={setCurrent} />
        //     <Key value='÷' current={current} result={result} setCurrent={setCurrent} />
        //     <button onClick={setResult}>=</button>
        // </div>
    );
}

export default Keypad;