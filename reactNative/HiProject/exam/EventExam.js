import React, { Component } from 'react';
import {ScrollView, Image,Text, TextInput, View ,Alert} from 'react-native';

export default class EventExam extends Component {
  state = {
      text : 'test'
  }
  onChange = (name) =>{
      this.setState({
        text : name
      });
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          //placeholder="이름을 입력하세요."
          onChangeText={(name) => this.onChange(name)}
          onSubmitEditing = {(name) => this.onChange(name)}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text} 안녕~~^^
        </Text>

        <ScrollView>
          <Image
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUJ87GCYkb1SQ2PIHeoTy0Ncg9HLEw9UaOdh-G_WZewG2P1Zd'}}
            style={{width: 300, height:180}}
          />
          <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </Text>
        </ScrollView>
      </View>
    );
  }
}
