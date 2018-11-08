import React, { Component } from 'react';
import './TodoInput.css';
class TodoInput extends Component {
    
    
    enterKeyPress = (e)=>{
        if(e.key === 'Enter'){            
            this.props.todoInputClick();
        }
    }  

    

    render() {     
        return (
            <div className="form">
                <input 
                    type="text"
                    name="todo"
                    value={this.props.todo}
                    placeholder="할일..." 
                    onChange = {this.props.todoInputChange}
                    onKeyPress={this.enterKeyPress}
                />
                <div 
                    className="create-button"
                    onClick = {this.props.todoInputClick}    
                >추가</div>
            </div>
        );
    }
}

export default TodoInput;