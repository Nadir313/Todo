import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css" ;

function TodoItems({...todo}) {
  return (
    <div>
      <h3 style={{color:"Navy", fontSize:"16px ", paddingTop:"16px"}}> {todo.task} <span className='text-danger '></span> </h3>
       {/* {todo.flag ? ( <input type="text" value={todo.task}/>) : ( )} */}
    </div>
  )
}

export default TodoItems