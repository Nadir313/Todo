import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css" ;
// import TodoInput from './TodoInput'

function TodoItems({...todo}) {

  return (
    <div>
        {/* <h4>{...todo}</h4> */}
        <h3> {todo.task}</h3>
    </div>
  )
}

export default TodoItems