import Todolist from "./Todolist";
import React, { useState, useRef, useEffect } from "react";

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
    return new Promise((resolve) => {
      getData()
        .then((res) => {
          setTodos(res);
          setTimeout(() => {
            resolve();
          }, 100);
        })
        .catch((err) => console.log(err));
    });
  };
  // when it first loads it gets the db todos
  useEffect(() => {
    pullTodos();
  }, []); // this is the dependancy array. it means the function will run everytime the todos array is changed

  //adds todo from input
  const createTodo = () => {
    const message = todoNameRef.current.value;
    if (message === "") return;
    const newTodo = { message: message, complete: false, _id: Math.random() };
    addTodo(newTodo);
    todoNameRef.current.value = null;
  };

  const handleAddTodo = async () => {
    await createTodo();
    pullTodos();
  };

  const handleDeleteCompleted = async () => {
    await deleteCompleted();
    pullTodos();
  };

  const handleDeleteAll = async () => {
    await deleteTodos();
    pullTodos();
  };

  const toggleComplete = async (id) => {
    await updateChecked(id);
    pullTodos();
  };
  return (
    <>
      <Todolist todos={todos} toggleComplete={toggleComplete} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleDeleteCompleted}>Clear Complete</button>
      <button onClick={handleDeleteAll}>Delete all!!!</button>
      {/* <button onClick={() => pullTodos()}>pull</button> */}
      <div>
        {" "}
        {todos.filter((value) => value.complete === !true).length} left to do{" "}
      </div>
    </>
  );
}

export default App;
