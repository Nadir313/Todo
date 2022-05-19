import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css" ;

function TodoItems({...todo}) {
  return (
    <div>
        <h3> {todo.task}</h3>
    </div>
  )
}

export default TodoItems