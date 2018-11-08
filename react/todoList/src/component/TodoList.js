import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
    
    render() {
        const todos = this.props.todos;
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo.todo}                   
                    todoId={todo.id}
                    done={todo.done}
                    onToggle={()=>this.props.onToggle(todo.id)}
                    onRemove={()=>this.props.onRemove(todo.id)}
                />
            )
        );
       return (
           <ul className={'todo-item-list'}>
               {todoList}
           </ul>
        );
    }
}

export default TodoList;