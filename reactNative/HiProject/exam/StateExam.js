import React, {Component} from 'react';
import {View, Text,Button} from 'react-native';

class StateExam extends Component{
    state = {
        name : 'kang',
        date : 13
    }
  
    onPressButton=() => {
        this.setState({
            date : this.state.date + 1
        })
    }
    render(){
        return (
            <View >            
                <Text>안녕  {this.state.name}!</Text>
                <Text>오늘은  {this.state.date} 입니다. 
                버튼을 누를 때마다 하루가 지나가요..</Text>
                <Button
                     onPress={this.onPressButton}
                    title="눌러주세요^^"
                />
            </View>
        );
    }   
}
export default StateExam;