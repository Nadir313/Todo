import React, {useState} from 'react'
import Moment from "react-moment";


function TodoInput(props) {
    const [task, setTask] = useState("") ;
    // const [date, setDate] = useState(Date())

    // adding a task and setting setTask from the input values .
    const onChangeHandler = (event)=>{
        setTask(event.target.value)
    }

    // Handling the Form submission
    const submitHandler = (event)=>{
        event.preventDefault() ;

        props.onSubmit({
            id : Math.floor(Math.random()*100000),
            task : task,
            // date_create: Moment().format("DD-MM-YYYY hh:mm:ss")
        })

        setTask("")
    }

  return (
    <form onSubmit={submitHandler}>
        <div>
            <input 
            className='form-control p-2'
            type="text"
            placeholder='Do Something '
            value={task}
            name="todo"
            onChange={onChangeHandler}
            /> 
        </div>
        <button className='btn btn-info  text-dark fw-bold m-2 w-25'>Add To Do</button>
    </form>
  )
}

export default TodoInput