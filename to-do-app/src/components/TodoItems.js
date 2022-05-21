import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css" ;
// import dateFormat from 'dateformat';

function TodoItems({...todo}) {
  // const deleting = ()=>{
  //   console.log("test")
  // }

  return (
    <div>
      {/* sending data to TodoList 
      format(new Date(), 'yyyy/MM/dd kk:mm:ss'))
      */}
        <h3 style={{color:"Navy", fontSize:"16px ", paddingTop:"16px"}}> {todo.task} <span className='text-danger '></span> </h3>
    </div>
  )
}

export default TodoItems