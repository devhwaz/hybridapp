import React, { Component } from 'react';

class ScrollBox extends Component {  
    state = {
        test : '111'
    }
    sum = ()=>{
        console.log('sum call!!')
    }
    scrollBottom = ()=>{
        console.log(this.box);
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;
        this.box.scrollTop = scrollHeight - clientHeight;

    }
    render() {
        const style={
            border : '1px solid black',
            height : '200px',
            width : '200px',
            overflow : 'auto',
            position : 'relative'
        }
        const innerStyle = {
            width : '100%',
            height : '500px',
            background :'linear-gradient(white, black)'
        }
        return (
            <div
                style = {style} 
                ref = {(ref)=>this.box = ref}      
            >
                <div style={innerStyle}></div>                
            </div>
        );
    }
}

export default ScrollBox;