import React from 'react';
import Result from './screen/Result';
import History from './screen/History';

const Screen = props => {
    const { current, result, history } = props;
    return (
        <div>
            <History history={history} />
            <Result current={current} result={result} />
        </div>
    );
}

export default Screen;