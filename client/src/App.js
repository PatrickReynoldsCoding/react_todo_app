import Todolist from './Todolist';
import React, {useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, routes, Route } from 'react-router-dom'


// apis
import { getData } from "./functions/getData";

// function App() {
// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		getData()
// 			.then((res) => setData(res.message))
// 			.catch((err) => console.log(err));
// 	}, []);

// 	return (
// 		<div className="App">
// 			<h1>{data}</h1>
// 		</div>
// 	);
// }


function App() {
  const [todos, setTodos] = useState([]) //object destructoring
  const todoNameRef = useRef()
  // const todoListRef = useRef()

  // function clearList() {
  //   todoListRef.current = []
  // }

  useEffect(() => {
    getData() // api function
    .then((res) => setTodos(res))
    .catch((err) => console.log(err));
  }, []); // this is the dependancy array. it means the function will only fetch once


  function handleAddTodo(e) { //adds todo from input
    const message = todoNameRef.current.value
    if (message === '') return
    setTodos(todos => {
     return [...todos, { id: uuidv4(), message: message, complete: false}]
  })
  todoNameRef.current.value = null //wipes textbox
  }

return (
  // <div className="App">
  //   <h1>{console.log(todos)}</h1>
  // </div>
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
