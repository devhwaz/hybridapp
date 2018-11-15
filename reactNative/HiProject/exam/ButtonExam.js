import React, { Component } from 'react';
import {Alert, View, Button,StyleSheet} from 'react-native';

class ButtonExam extends Component {
    btnrrPress(){
        Alert.alert('hoho');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress = {this.btnPress}
                        title = "눌러주세요"
                    ></Button>
                </View>                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
});
export default ButtonExam;