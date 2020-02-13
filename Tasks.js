import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function Tasks(props) {

  let content;
  if (props.tasks.length < 1) {
    content = (
      <Text>No tasks left, good job!</Text>
    )
  } else {
    content = (
      <FlatList data={props.tasks} renderItem={({item}) => <Text>{item}</Text>}></FlatList>
    )
  }
  return (
    <View>
      <Text>Your Tasks:</Text>
      {content}
    </View>
  )
}