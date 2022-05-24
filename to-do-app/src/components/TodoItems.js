import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css" ;

function TodoItems({...todos}) {

  const style2 ={
    color:"Black",
    fontSize:"16px ",
    paddingTop:"16px"
   } ;

   const style3 = {
     color:"DarkGreen" ,
    textDecorationLine: 'line-through',
   }

  return (
    <>   
    <div  >
      <h3 style={todos.complete ? style3 : style2 }>{todos.task} <span className='text-danger p-1 fw-bold '> {todos.date}</span></h3>
    </div>
    </>
  )
}

export default TodoItems ;