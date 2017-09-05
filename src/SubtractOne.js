import React from 'react';
import Counter from './Counter';

let SubtractOne = ({clickHandler}) => (
    //increment count
    <button onClick={clickHandler}>-</button>
)

export default SubtractOne;