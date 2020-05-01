import React from 'react';
import Result from './screen/Result';
import History from './screen/History';

const Screen = props => {
    return (
        <div>
            <h2>Screen</h2>
            <History />
            <Result />
        </div>
    );
}

export default Screen;