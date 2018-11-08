import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const todoStateUpdate = this.props.onToggle;
        const todoRemove = this.props.onRemove;
        console.log(this.props.todo);   
        return (               
                <li className="todo-item" onClick={()=>todoStateUpdate(this.props.todoId)}>                   
                    <span className={`todo-text ${this.props.done&&'checked'}`}> {this.props.todo}</span>
                    <span 
                        className="remove"
                        onClick = {(e)=>{
                            e.stopPropagation();
                            todoRemove(this.props.todoId);
                            }
                        }
                    >&times;</span>
                </li> 
                 
        );
    }
}

export default TodoItem;