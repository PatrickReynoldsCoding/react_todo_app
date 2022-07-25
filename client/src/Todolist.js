//type rfc
import React from 'react'
import Todo from './Todo'

export default function Todolist({ todos }) {
  return (
    todos.map(todo => {
      console.log(todo.message)
      return <Todo key={todo._id} todo={todo.message} />
    })
  )
}
