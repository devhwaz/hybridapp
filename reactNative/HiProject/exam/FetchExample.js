import React from 'react';
import { Alert,FlatList, ActivityIndicator, Text, View, Button  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('http://192.168.0.164:8080/todos')
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(JSON.stringify(responseJson));        
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <View><Text>{item.todo}</Text><Button title={'X'}/></View>}
          keyExtractor={({id}, index) => id.toString()}
        />
      </View>
    );
  }
}
