import React, { Component } from 'react';

import CountNum from './CountNum';
import AddOne from './AddOne';
import SubtractOne from './SubtractOne';

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render () {
        return (
            <div>
                <CountNum num={this.state.count}/>
                <AddOne clickHandler={this._addOne}/>
                <SubtractOne clickHandler={this._subtractOne}/>
            </div>
        )
    }

    _addOne = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    _subtractOne = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
}

export default Counter;