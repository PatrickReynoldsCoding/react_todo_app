import Todolist from './Todolist';
import React, {useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, routes, Route } from 'react-router-dom'


// apis
import { getData } from "./functions/getData";


function App() {
  const [todos, setTodos] = useState([]) //object destructoring
  const todoNameRef = useRef()

// when it forst loads it gets the db todos
  useEffect(() => {
    getData() // api function
    .then((res) => setTodos(res))
    .catch((err) => console.log(err));
  }, []); // this is the dependancy array. it means the function will only fetch once


  function handleAddTodo() { //adds todo from input
    const message = todoNameRef.current.value
    if (message === '') return
    setTodos(todos => {
     return [...todos, { id: uuidv4(), message: message, complete: false}]
  })
  todoNameRef.current.value = null //wipes textbox
  }

function saveTodosToDb() {

}

return (
<>
  <Todolist todos={todos}/>
  <input ref={todoNameRef} type="text" />
  <button onClick={handleAddTodo}>Add Todo</button>
  <button>Clear Complete</button>
  <button onClick={saveTodosToDb}>save Todos</button>
  <div>{todos.length} left to do </div>
</> 
  );
}

export default App;
