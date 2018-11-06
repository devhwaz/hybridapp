import React, { Component } from 'react';
import './ValidationExam.css';
class ValidationExam extends Component {
    state = {
        password : '',
        clicked : false,
        validated : false
    }
    myChange = (e) =>{
        this.setState({
            password : e.target.value
        });
    }
    myClick = (e) => {
        this.setState({
            clicked : true,
            validated : this.state.password === '1234'
        });
        this.input.focus();
      }
    render() {
        return (
            <div>
                <h1>비밀번호 입력 테스트</h1>
                <input
                    ref={(ref) => {this.input=ref}} 
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange = {this.myChange}
                    className = {this.state.clicked ? (this.state.validated ?'success':
                    'fail'):''}
                />
                <button onClick={this.myClick}>확인</button>
            </div>
        );
    }
}

export default ValidationExam;