//type rfc
import React from "react";
// props are passed to the function
export default function Todo(props) {
  function handleTodoClick() {
    props.toggleComplete(props.obId);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          defaultChecked={props.complete}
          onChange={handleTodoClick}
        />
        {props.todo}
      </label>
    </div>
  );
}
