import React from 'react';

const Result = props => {
    const { current, result } = props;
    return (
        <h1 className={result?'blue':'red'}>{current}</h1>
    );
}

export default Result;