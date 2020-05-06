import React from 'react';

const Result = props => {
    const { current, result } = props;
    return (
        <h2 className={result ? 'blue' : 'red'}>{current}</h2>
    );
}

export default Result;