import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Tasks from './Tasks';
import Done from './Done';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  const [val, setVal] = useState('');

  let handleSubmit = () => {
    let tasksCopy = [...tasks]
    tasksCopy.push(val)
    setTasks(tasksCopy)
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={ (text) => setVal(text) } value={val} placeholder="Add a task here"></TextInput>
      <Button onPress={() => handleSubmit()} title="Add Task"></Button>
      <Text>To-Do</Text>
      <Tasks tasks={tasks} />
      <Done tasks={done} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
