import React from 'react';

const History = props => {
    const { history } = props;
    return (
        <div>
            <ul>
                {history.map(each => <li key={each}>{each}</li>)}
            </ul>
        </div>
    );
}

export default History;