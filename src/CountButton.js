import React from 'react';
import Counter from './Counter';

let CountButton = ({clickHandler}) => (
    //increment count
    <button onClick={clickHandler}>+</button>
)

export default CountButton;
