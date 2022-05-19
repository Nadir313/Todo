import React, {useState, useEffect} from 'react'
import {MdOutlineDeleteForever} from "react-icons/md"
import {BiEdit} from "react-icons/bi"
import TodoInput from './TodoInput'
import TodoItems from './TodoItems';

import "../style/style.css" ;

function ToList() {

    const mylist = JSON.parse(localStorage.getItem('todos'));
    // console.log('mylist=',mylist);

    const [todos, setTodos] = useState(mylist);

    // useEffect(() => {
    //     if (todos) {
    //         setTodos(todos);
    //     }
    // }, []);


    

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]) ;


    console.log(todos) ;
 

    const DeleteHandler = (e)=>{
        console.log(e)
    }

    const editHandler = ()=>{
        console.log("edit was cicked");
    }

    const addTodo = (todo)=>{
        if(todo.task.trim().length !==0 ){
            // console.log(todo.task.trim().length)
        }else{
            alert("fill the form")
            return ;
        }

        const newTobeDone = [todo, ...todos] ;
        setTodos(newTobeDone) ;


        // console.log(newTobeDone) ;
        // const test = JSON.parse(localStorage.getItem("todos"))
        // console.log(test)
    }
  return (
    <div id='myForm' className='text-light w-25'>
        <h3 className='text-dark fw-bold p-3 m-3'>Today we will</h3>
            <TodoInput onSubmit={addTodo} /> 
            {todos.map(todo =>{
                return(
                    <div className='bg-info border border-2 d-flex justify-content-between p-2 m-2'>
                        <TodoItems task={todo.task} />
                        <div>
                            <MdOutlineDeleteForever onClick={DeleteHandler} />
                            <BiEdit onClick={editHandler} />
                        </div>
                    </div>
                )
            })}
    </div>
  )
}

export default ToList