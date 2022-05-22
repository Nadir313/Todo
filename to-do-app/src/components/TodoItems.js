import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css" ;



function TodoItems({...todo}) {
  
  const style2 ={
    color:"Black",
    fontSize:"19px ",
    paddingTop:"16px"
   } ;

  return (
    <>   
    <div>
      <h3 style={style2}> {todo.task} <span className='text-danger '> {todo.date} </span> </h3>
    </div>
    <h2></h2>
    </>
  )
}

export default TodoItems ;