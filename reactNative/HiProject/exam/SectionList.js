import React from 'react';
import {FlatList,SectionList, StyleSheet, Text, View} from 'react-native';

export default class FlatListBasic extends React.Component{    
    render(){
        const todos = [
            {todo:'리액트 공부하기'},
            {todo:'봄봄이 밥주기'},
            {todo:'todoList만들기'},
            {todo:'자바스크립트 공부하기'},
            {todo:'밥먹기'},
            {todo:'청소하기'}
        ];
        return (
            <SectionList
                renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={{fontWeight: 'bold'}}>{title}</Text>
                )}
                sections={[
                    {title: 'Title1', data: ['item1', 'item2']},
                    {title: 'Title2', data: ['item3', 'item4']},
                    {title: 'Title3', data: ['item5', 'item6']},
                ]}
                keyExtractor={(item, index) => item + index}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  