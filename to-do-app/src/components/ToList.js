import React, {useState, useEffect} from 'react'
import {MdOutlineDeleteForever} from "react-icons/md"
import {BiEdit} from "react-icons/bi"
import TodoInput from './TodoInput'
import TodoItems from './TodoItems';

import "../style/style.css" ;

function ToList() {

    // retrieving data from local storage 
    const addedTodo = JSON.parse(localStorage.getItem('todos'));
    const [todos, setTodos] = useState(addedTodo);

    // sending data to local storage 
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]) ;

    // The delete Function .
    const DeleteHandler = (id)=>{
        // console.log(id) ;
        const removeItem = todos.filter((todo) => {
        return todo.id !== id;  });
        setTodos(removeItem);
    }
    // ================================>


    // the edit function .
    const editHandler = (id)=>{
        console.log(id) ;
        let editedTodo = todos.filter(todo =>{
           return todo.id === id ;
        })

        console.log(editedTodo)

       let editedData =  prompt("test",editedTodo[0].task)
       console.log(editedData) ;
       const edit = todos.map((todo)=>{
           if(todo.id === id){
               todo.task = editedData ;
           }
           return todo.task ;
       }) 
       console.log(edit) ;
       const edited = [...todos, edit]
       const newEdited = edited.pop() ;
       setTodos(edited)
    }

    // function that add to do . 
    const addTodo = (todo)=>{
        if(todo.task.trim().length !==0 ){
        }else{
            alert("Please Fill in The form ")
            return ;
        }

        const newTobeDone = [todo, ...todos] ;
        setTodos(newTobeDone) ;
    }

  return (
    <div id='myForm' className='text-light w-25'>
        <h1 className='text-white p-3 m-3'>Today we will</h1>
            <TodoInput onSubmit={addTodo} /> 
            {todos.map(todo =>{
                return(
                    <div  key={todo.id}  className='bg-info border border-2 rounded d-flex justify-content-between p-2 m-2'> 
                     <TodoItems task={todo.task} />  
                        <div>
                            <MdOutlineDeleteForever className='bg-danger p-1 border border-2' onClick={()=>{
                                DeleteHandler(todo.id)
                            }} />
                            <BiEdit className='bg-success mx-1 p-1 border border-2' onClick={()=>{
                                editHandler(todo.id)
                                }}  /> 
                        </div> 
                    </div>
                )
            })}
    </div>
  )
}

export default ToList