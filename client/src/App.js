import Todolist from './Todolist';
import React, {useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, routes, Route } from 'react-router-dom'


// apis
import { getData } from "./functions/getData";
import { addTodo } from './functions/addTodo';


function App() {
  const [todos, setTodos] = useState([]) //object destructoring
  const todoNameRef = useRef()

// when it forst loads it gets the db todos
  useEffect(() => {
    getData() // api function
    .then((res) => setTodos(res))
    .catch((err) => console.log(err));
  }, []); // this is the dependancy array. it means the function will only fetch once


  const handleAddTodo = async (e) => { //adds todo from input
    const message = todoNameRef.current.value
    if (message === '') return
    const newTodo = { id: uuidv4(), message: message, complete: false}
    setTodos(todos => {
     return [...todos, newTodo]
  })
  //add newTodo to DB
    addTodo(newTodo)


  todoNameRef.current.value = null //wipes textbox
  // saveTodosToDB
  console.log(todos)
  }

  // function saveTodosToDB(todos) {
  // //api to save todos
  // todos.preventDefault() // this prevents the page from refreshing, as submit buttons tend to refresh by default


  // }

return (
<>
  <Todolist todos={todos}/>
  <input ref={todoNameRef} type="text" />
  <button onClick={handleAddTodo}>Add Todo</button>
  <button>Clear Complete</button>
  <div>{todos.length} left to do </div>
</> 
  );
}

export default App;
