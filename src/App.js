import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // when the app loads we need to listen to the db and fetch todos when they get added/removed
  
  useEffect(() => {
    // this code fires when the app.js loads and watch for any changes concerning a given dependency
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    // this is fire when i click the button
    event.preventDefault()

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('') // clear up the input after hitting submit
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
       // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
