import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function Tasks(props) {

  let content;
  if (props.tasks.length < 1) {
    content = (
      <Text>No tasks left, good job!</Text>
    )
  } else {
    content = (
      <FlatList data={props.tasks} renderItem={({item}, id) => <View key={id}><Button style={styles.taskComplete} onPress={() => props.complete(item)} title="X">Click me</Button><Text style={styles.taskMessage}>{item}</Text></View>}></FlatList>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Your Tasks:</Text>
      <hr />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
    boxShadow: '0 5px 10px black',
    margin: '15px',
    padding: '10px',
    textAlign: 'center',
    width: '150px'
  },
  taskMessage: {
    display: 'inline-block'
  },
  taskComplete: {
    width: '10px',
    display: 'inline-block'
  }
})