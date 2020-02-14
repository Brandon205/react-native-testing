import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Tasks from './Tasks';
import Done from './Done';

export default function App() {
  const [tasks, setTasks] = useState(['task1']);
  const [done, setDone] = useState(['task2']);
  const [val, setVal] = useState('');

  let handleSubmit = () => {
    let tasksCopy = [...tasks]
    tasksCopy.push(val)
    setTasks(tasksCopy)
  }

  let completeTask = (task) => {
    let tasksCopy = [...tasks]
    let doneCopy = [...done]
    doneCopy.push(task)
    setDone(doneCopy)
    tasksCopy.splice(tasksCopy.indexOf(task), 1)
    setTasks(tasksCopy)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do</Text>
      <TextInput style={styles.addTask} onChangeText={ (text) => setVal(text) } value={val} placeholder="Add a task here"></TextInput>
      <Button style={styles.addTaskButton} onPress={() => handleSubmit()} title="Add Task"></Button>
      <Tasks tasks={tasks} complete={completeTask} />
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
    backgroundColor: 'whitesmoke'
  },
  addTask: {
    backgroundColor: 'lightblue',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
    padding: 8
  },
  header: {
    fontSize: 45,
    marginBottom: 5
  },
  addTaskButton: {
    display: 'flex',
    padding: 8,
    width: 100
  }
});
