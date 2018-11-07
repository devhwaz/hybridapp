import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number : 0,
        color : null
    }
    myRef = null;

    constructor(props){
        super(props);
        console.log('constructor');
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('getDerivedSateFromProps',nextProps,prevState);
       
        return null;
    }
    componentDidMount(){
        console.log('componentDidMount');
        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
       
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate',nextProps,nextState);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate',prevProps,prevState);
      
        return null;
    }
    componentDidUpdate(prevProps, prevState,snapshot){
        console.log('componentDidUpdate',prevProps, prevState,snapshot);
    }
    myClick = () =>{
        console.log(this.state.number);
        this.setState({
            number : this.state.number + 1
        })
    }
    render() {
        console.log('render');
        const style = {
            color : this.props.color
        }
        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.myClick}>number++</button>
            </div>
        );
    }
}

export default LifeCycleSample;