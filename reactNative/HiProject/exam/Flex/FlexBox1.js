import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

class FlexBox1 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Text>nav bar</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.left}></View>
                    <View style={styles.right}>
                        <View style={styles.rightTop}></View>
                        <View style={styles.rightBottom}></View>
                    </View>     
                </View>                      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column'
    },
    navBar:{
        height : 60,
        backgroundColor : 'green',
        justifyContent : 'center',
        alignItems: 'center'
    },
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

export default FlexBox1;