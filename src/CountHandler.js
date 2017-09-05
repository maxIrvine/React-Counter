import React, { Component } from 'react';

import Counter from './Counter'

class CountHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countArray: []
        }
    }

    render () {
        console.log(this.state.countArray);
        console.log(typeof this.state.countArray);
        return (
            <div>
                <button onClick={this._addCounter}>Add Counter</button>
                <button onClick={this._removeCounter}>Remove Counter</button>
                <div> {this.state.countArray} </div>
            </div>
        );
    }

    _addCounter = () => {
        this.setState({
            countArray: this.state.countArray.concat([<Counter/>])
        });
    }

    _removeCounter = () => {
        var len = this.state.countArray.length;
        this.setState({
            countArray: this.state.countArray.slice(0, len-1)
        });
    }
}






export default CountHandler;