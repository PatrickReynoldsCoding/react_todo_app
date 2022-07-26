//type rfc
import React from 'react'
import Todo from './Todo'

export default function Todolist({ todos, toggleComplete }) {
  return (
    todos.map(todo => {
      //render a todo with props
      return <Todo key={todo._id} obId={todo._id} toggleComplete={toggleComplete} todo={todo.message} complete={todo.complete} /> 
    })
  )
}
