import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default function Done(props) {

  let content;
  if (props.tasks < 1) {
    content = (
      <Text>No completed tasks</Text>
    )
  } else {
    content = (
      <FlatList data={props.tasks} renderItem={({item}, id) => <Text key={id}>{item}</Text>}></FlatList>
    )
  }
  return (
    <View>
      <Text>Finished Tasks:</Text>
      {content}
    </View>
  )
}