import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
import NavBar from './NavBar';
import Content from './Content';

class FlexBox extends Component {
    render() {
        return (
           <View style={styles.container}>
               <NavBar/>
               <Content/>
           </View>
        );
    }
}

export default FlexBox;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column'
    }
});