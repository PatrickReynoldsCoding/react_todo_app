//type rfc
import React from 'react'
import Todo from './Todo'

export default function Todolist({ todos }) {
  return (
    todos.map(todo => {
      //render a todo with props
      return <Todo key={todo._id} todo={todo.message} complete={todo.complete} /> 
    })
  )
}
