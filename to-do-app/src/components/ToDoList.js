import React, {useState, useEffect} from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import {AiFillSchedule} from "react-icons/ai" ;
import {MdOutlineDeleteForever} from "react-icons/md" ;
import {BiEdit} from "react-icons/bi" ;
import {MdDoneOutline} from "react-icons/md" ;

import "../style/style.css" ;

function ToDoList() {

    // retrieving data from local storage 
    const addedTodo = (JSON.parse(localStorage.getItem('todos'))).reverse();
    const [todos, setTodos] = useState(addedTodo.reverse());

    // sending data to local storage 
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]) ;


    /*The delete Function .==> we pass the id and then we filter over the todos array
     wich only return the todos who doesn't contains the wanted element . */
    const DeleteHandler = (id)=>{
        const removeItem = todos.filter((todo) => {
        return todo.id !== id;  });
        setTodos(removeItem);
    }


    /* the edit function .==> the chosen value is being edited in the 
        prompt window  After that the data is sent to the localstorage 
        and later the data is retrieved to be shown to the user . */
    const editHandler = (id)=>{
        let editedTodo = todos.filter(todo =>{
           return todo.id === id ;
        })
       let editedData =  prompt("Edit your To Do",editedTodo[0].task)
       if(editedData.length == 0)return ;
       const edit = todos.map((todo)=>{
           if(todo.id === id){
              if(todo.task.trim().length !== 0 ){
                todo.task = editedData ;
                return todo.task ;
              }
              else{
                  return ;
              }
           }
           
       }) 
       const edited = [...todos, edit]
        edited.pop();
       setTodos(edited)
    }

    // the complete handler is basically applying a line through the completed Task .
    const completeHandler =(id)=>{
        console.log(id)
        let mapped = todos.map(todo =>{
            if(todos.id === id){
                return { ...todos, isDone : !isDone  } ;
            }
            return todo
        })
        console.log(mapped) ;
        console.log(isDone) ;
      
    }

    // function adding a to do . 
    const addTodo = (todo)=>{
        if(todo.task.trim().length !==0 ){
        }else{
            alert("Please Fill in The form ")
            return ;
        }

        const newTobeDone = [todo, ...todos] ;
        setTodos(newTobeDone) ;
    }

    const style1 = {
        color : "DarkSlateGrey" 
    }

  return (
    <div id='myForm' className='text-dark w-25'>
        <h1 style={style1} className=' p-3 m-3'>To Do List  < AiFillSchedule /> </h1>
            <TodoInput onSubmit={addTodo}   /> 
            {todos.map(todo =>{
                return(
                    <div  key={todo.id}  className='bg-secondary border border-2 rounded d-flex justify-content-between p-2 m-2'> 
                        <TodoItems task={todo.task}  date={todo.date} complete={todo.isDone} /> 
                        <div>
                            <MdDoneOutline className='bg-warning p-1 mx-1 border border-2 ' onClick={()=>{
                                completeHandler(todo.id)
                            }} />
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

export default ToDoList ;