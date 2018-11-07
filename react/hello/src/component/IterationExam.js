import React, { Component } from 'react';

class IterationExam extends Component {
    //초기데이터 state에 담기!!! 
    state={
        names : ['삐삐','봄봄','멍멍','야옹'],
        name : ''
    }
    inputChange = (e)=>{
        this.setState({
            name : e.target.value
        })
    }
    nameInsert = () =>{
        this.setState({
            names : this.state.names.concat(this.state.name),
            name : ''
        })
    }
    nameRemove = (index) =>{
        const {names} = this.state;
        this.setState({
            names : names.filter((name,i)=>i !== index)
        })
    }
    render() {
        const nameList = this.state.names.map(
            (name,index) => (<li key={index}
                onDoubleClick = {()=>this.nameRemove(index)}
            >{name}</li>)
        )
        return (
            <div>
                <input 
                    value = {this.state.name}
                    onChange = {this.inputChange}
                />
                <button
                    onClick = {this.nameInsert} 
                >이름추가!!</button>
                {nameList}
            </div>
        );
    }
}

export default IterationExam;
