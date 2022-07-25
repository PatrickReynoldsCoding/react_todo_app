//type rfc
import React from 'react'
 
 export default function todo({ todo, complete }) {
   return (
     <div>
      <label>
        <input type='checkbox'checked ={complete}/>
        {todo}
      </label>
      </div>
   )
 }
 