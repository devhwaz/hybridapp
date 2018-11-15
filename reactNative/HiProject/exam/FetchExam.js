import React,{Component} from 'react';
import { Alert,ActivityIndicator,FlatList, Text, View} from 'react-native';

export default class FetchExam extends Component{
    state = {
        isLoading : true,
        todos : []
    }   
    componentDidMount(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                Alert.alert('success',request.responseText);
               this.setState({
                  isLoading: false,
                  todos: JSON.parse(request.responseText)
                });
                console.log('success', request.responseText);
            } else {
                Alert.alert('error');
                console.warn('error');
            }
        };
        request.open('GET', 'http://192.168.0.164:8080/todos/');
        request.send();
    };
        render(){
            if(this.state.isLoading){
                return(
                    <View style={{flex:1,padding:20}}>
                        <ActivityIndicator/>
                    </View>
                )
         }
            return(
                <View style={{flex:1,paddingTop:20}}>
                    <FlatList
                        data={this.state.todos}
                        renderItem = { ({item})=><Text>{item.todo}</Text>}
                        keyExtractor={({id},index)=> id}
                    />
                </View>
            )
       
    }
}