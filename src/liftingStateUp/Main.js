import React, { Component } from 'react';
import Counter from './Counter'

class Main extends Component {

    state = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };


    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div className="App">
                <Counter 
                    count={this.state.count} 
                    increment={this.increment} 
                    decrement={this.decrement}
                />
                <Counter 
                    count={this.state.count} 
                    increment={this.increment} 
                    decrement={this.decrement}
                />
            </div>
        );
    }
}

export default Main


// several components need to reflect the same changing data
// these two component can comunicate with each other 
// what ever change we made in child componenet should reflect to parent component and corresponding child compoent of parent 