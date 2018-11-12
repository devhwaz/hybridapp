import React, { Component } from 'react';
import Counter from '../compoment/Counter';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/modules/Counter'

class CountContainer extends Component {
    increment = () =>{
        this.props.increment();
    }
    decrement = () =>{
        this.props.decrement();
    }
    render() {
        return (
            <Counter 
                value={this.props.number}
                onIncrement = {this.increment}
                onDecrement = {this.decrement}
            />
        );
    }
};
const mapStateToProps = ({counter})=>({
    number : counter.number
});
const mapDispatchToProps = dispatch =>({
    increment : ()=>dispatch(increment()),
    decrement : ()=>dispatch(decrement())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountContainer);