import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import ToDo from './Todo'
import db from './firebase'
import firebase from "firebase"
import './App.css';

function App() {
  // variabels
  const [todos, setTodos] = useState([]) 
  const [input, setInput] = useState('')

  // events
  useEffect(() =>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
      // setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault()

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  
  // html 
  return (
    <div className="App">
      <p>hello clever progrmmers!</p>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant="outlined" color="secondary" type="submit" onClick={addTodo}>
          Add ToDo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <ToDo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
