import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default class NavBar extends Component{
    render(){
        return(
            <View style={styles.navBar}>
                <Text>nav bar</Text>
            </View>
               
        );
    }
}

const styles = StyleSheet.create({
    navBar:{
        height : 60,
        backgroundColor : 'green',
        justifyContent : 'center',
        alignItems: 'center'
    }
});

