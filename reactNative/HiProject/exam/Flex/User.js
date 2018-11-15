import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
export default class User extends Component{
    render(){
        return(
            <View style={styles.user}>
                <View style={{height:100,flexDirection:'row',borderWidth: 1}}>
                    <View style={{width: 100}}>
                    <View style={{width: 100, height: 100, backgroundColor: 'gray'}}>
                    </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>닉네임</Text>
                        <Text>아이디</Text>
                        <Text>학교이름</Text>
                    </View>

                </View>
                <View style={{height:50,flexDirection:'row', borderWidth: 1}}>
                    <View style={{flex: 1, borderWidth: 1}}><Text>test</Text></View>
                    <View style={{flex: 1, borderWidth: 1}}><Text>test</Text></View>
                    <View style={{flex: 1, borderWidth: 1}}><Text>test</Text></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    user: {
        height: 150,
        backgroundColor: '#81D4FA',
    },
     
});