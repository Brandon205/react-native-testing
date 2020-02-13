import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text>Finished Tasks:</Text>
      <hr /> 
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    boxShadow: '0 5px 10px black',
    margin: '15px',
    padding: '10px',
    textAlign: 'center',
    width: '150px',
  },
})