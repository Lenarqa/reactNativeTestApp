import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const newTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos(todos.concat([newTodo]));
    
    // setTodos((prevTodos)=>{
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title
      }  
    ]);
  }

  return (
    <View>
      <Navbar title="ToDo app"/>
      <View style={styles.container}>
        <AddTodo onSubmit={newTodo}/>

        <View>
          {
          todos.map(todo => <Todo key={todo.id} todo={todo.title}/>) 
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  }
});
