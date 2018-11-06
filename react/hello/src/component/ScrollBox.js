import React, { Component } from 'react';

class ScrollerBox extends Component {  
  
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
            >
                <div style={innerStyle}></div>                
            </div>
        );
    }
}

export default ScrollerBox;