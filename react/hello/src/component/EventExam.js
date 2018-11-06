import React, { Component } from 'react';

class EventExam extends Component {
    state ={
        message : '',
        age : 20
    }
    // constructor(prop){
    //     super(prop);
    //     this.myChange = this.myChange.bind(this);
    // }
    myChange = (e)=> {
        console.log(this.state.message);
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    myClick = ()=>{
        alert(this.state.message);
        this.setState({
        message : '',
        age : 0
    })
    }
    myKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.myClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 실습</h1>

                <input  
                    type = "text"
                    name = "message"
                    placeholder = "입력해보세요^^"
                    value = {this.state.message}
                    onChange = {this.myChange}
                    onKeyPress = {this.myKeyPress}
                />
                <input  
                    type = "text"
                    name = "age"
                    placeholder = "나이를 입력해보세요^^"
                    value = {this.state.age}
                    onChange = {this.myChange}
                />
                <button 
                    onClick = {this.myClick}
                >클릭!!</button>
            </div>
        );
    }
}

export default EventExam;