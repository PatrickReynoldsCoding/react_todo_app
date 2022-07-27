import Todolist from "./Todolist";
import React, { useState, useRef, useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';
// import { BrowserRouter, routes, Route } from "react-router-dom";

// apis
import { getData } from "./functions/getData";
import { addTodo } from "./functions/addTodo";
import { updateChecked } from "./functions/updatechecked";
import { deleteTodos } from "./functions/deleteTodos";
import { deleteCompleted } from "./functions/deleteCompleted";

function App() {
  const [todos, setTodos] = useState([]); //object destructoring
  const todoNameRef = useRef();

  
  const pullTodos = () => {
    getData() // api function
      .then((res) => setTodos(res))
      .catch((err) => console.log(err));
  }

  // when it first loads it gets the db todos
  useEffect(() => {
    pullTodos();
  }, [Todos]); // this is the dependancy array. it means the function will run everytime the todos array is changed
  
  


  //adds todo from input
  const handleAddTodo = async (e) => {
    const message = todoNameRef.current.value;
    if (message === "") return;
    const newTodo = { message: message, complete: false };
    setTodos((todos) => {
      return [...todos, newTodo];
    });
    //add newTodo to DB
    addTodo(newTodo);
    //wipes textbox
    todoNameRef.current.value = null; 
    
    console.log(todos);
    pullTodos()
    
  };

  //update the complete props in the todo via checkbox and upload to db
  const toggleComplete = (id) => {
    // patch
    updateChecked(id);
    //update todos
    pullTodos()
  };


  return (
    <>
      <Todolist todos={todos} toggleComplete={toggleComplete}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={() => {deleteCompleted(); pullTodos();}}>Clear Complete</button>
      <button onClick={() => {deleteTodos(); pullTodos();}}>Delete all!!!</button>
      <div> {todos.filter(value => value.complete === !true).length} left to do </div>
    </>
  );
}

export default App;
