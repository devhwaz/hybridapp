import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default class Content extends Component{
    render(){
        return(           
            <View style={styles.content}>
                <View style={styles.left}><Text>left</Text></View>
                <View style={styles.right}>
                    <View style={styles.rightTop}><Text>rightTop</Text></View>
                    <View style={styles.rightBottom}><Text>rightBottom</Text></View>
                </View>     
            </View>
        );
    }
}

const styles = StyleSheet.create({    
    content : {
        flex:1,
        flexDirection : 'row'
    },
    left : {
        flex : 1,
        backgroundColor : 'skyblue'
    },
    right : {
        flex : 1,
        flexDirection : 'column'
    },
    rightTop : {
        flex : 1,
        backgroundColor : 'pink'
    },
    rightBottom : {
        flex : 2,
        backgroundColor : '#FF20D4'
    }

});

