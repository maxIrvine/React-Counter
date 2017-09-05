import React from 'react';
import Counter from './Counter';

let AddOne = ({clickHandler}) => (
    //increment count
    <button onClick={clickHandler}>+</button>
)

export default AddOne;
