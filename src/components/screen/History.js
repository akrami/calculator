import React from 'react';
import styles from './History.module.css';

const History = props => {
    const { history } = props;
    return (
        <div className={styles.screen}>
            <ul>
                {history.map(each => <li key={each}>{each}</li>)}
            </ul>
        </div>
    );
}

export default History;