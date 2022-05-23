import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css" ;



function TodoItems({...todo}) {
  
  const style2 ={
    color:"Black",
    fontSize:"16px ",
    paddingTop:"16px"
   } ;

   const style3 = {
     color:"red" ,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
   }

  return (
    <>   
    <div  >
      <span>{todo.isDone}</span>
      <h3 style={todo.isDone ? style3 : style2 }>{todo.task} <span className='text-danger p-1 fw-bold '> {todo.date}</span></h3>
    </div>
    </>
  )
}

export default TodoItems ;