import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import User from './User';

class NavBar extends Component{
    render(){
        return(
            <View style={styles.navBar}>
                <Text style={styles.navBarText}>더보기</Text>
            </View>
        );
    }
}
class ButtonGroup extends Component{
    render(){
        return(
            <View style = {styles.buttonGroup}><Text>ButtonGroup</Text></View>
        );
    }
}

class Tabs extends Component{
    render(){
        return(
            <View style = {styles.taps}><Text>Tabs</Text></View>
        );
    }
}
export default class AppMain extends Component{
    render(){
        return(
            <View style={styles.container}>
                <NavBar></NavBar>
                <User/>
                <View style={{height: 40}}><Text>where</Text></View>
                <ButtonGroup />
                <View style={{flex: 1}}></View>
                <Tabs />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column'
    },
    navBar: {
        height: 60,
        backgroundColor : '#FF6E40',
        justifyContent : 'center',
        alignItems : 'center'
      },
      navBarText : {
        fontSize : 20,
        color : 'white'
      },
      user: {
        height: 150,
        backgroundColor: '#81D4FA',
      },
      buttonGroup: {
        height: 150,
        backgroundColor: '#C5E1A5',
      },
      taps: {
        height: 100,
        backgroundColor: 'yellow'
      }    
});