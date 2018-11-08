import React, { Component } from 'react';
import './TodoMain.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
class TodoListTemplate extends Component {

  todoId = 2;
  state = {
        todo : '', 
        //초기데이터
        todos : [
          {id : 0, todo : '봄봄이랑 놀아주기',done : true},
          {id : 1, todo : 'react 공부하기',done : false}
        ]
      };

  addTodo=(todo) =>{
      this.setState({
        todos:  [...this.state.todos,{id : this.todoId++, todo : this.state.todo,done : false}],
        todo:''
      });           
  }  
  todoRemove = (id) =>{
    console.log(id);
    const {todos} = this.state;
    const index =todos.findIndex(todo => todo.id === id);
    this.setState({
      todos:[
        ...todos.slice(0,index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  todoStateUpdate = (id) =>{

    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done : !todos[index].done
    }
    this.setState({
      todos:[
        ...todos.slice(0,index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }
  todoInputClick = (e) =>{
    if(this.state.todo === '' ){
      alert('할일을 입력 하세요^^');
      return ;
    }
    this.addTodo(this.state.todo);
  }

  todoInputChange = (e) =>{
    this.setState({
        todo : e.target.value
    });
  }

  render() {
    return (
      <div className={'todo-list-template'}>
        <div className={'title'}>나의 할일 목록</div>
        <section className={'form-wrapper'}>
            <TodoInput todoInputChange={this.todoInputChange} todoInputClick={this.todoInputClick} todo={this.state.todo} />
        </section>
        <section className={'todos-wrapper'}>
            <TodoList  todos={this.state.todos} onRemove={this.todoRemove} onToggle={this.todoStateUpdate} />
        </section>

      </div>
    );
  }
}

export default TodoListTemplate;