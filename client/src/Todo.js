//type rfc
import React from 'react'
 // props are passed to the function
 export default function Todo(props) { 
   return (
     <div>
      <label>
        <input type='checkbox'checked ={props.complete}/>
        {props.todo}
      </label>
      </div>
   )
 }
 