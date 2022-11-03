import { element } from "prop-types";
import React, { useState } from "react";


//const task = ['task1', 'task2', 'task3'];

const CreateTask = () => {

    const [inputValue, setinputValue] = useState([]); 
    const [task, setTask]  = useState([]);

    const inputChange = (event) => {
        setinputValue(event.target.value);
        
    }

    const addTask = () => {
        setTask(task.concat(inputValue));
        // const taskAux = [inputValue];
        // setTask(taskAux);
   
    }

    // const deleteTask = (index) => {
    //     //task.delete[index]
    //     setTask(task.splice(index,1));
    // }
    return (
        <>
            <div className="text-center">
                <input placeholder="Add a task" onChange={inputChange}></input>
                <button type="button" onClick={addTask}>Add</button>
                {/* <p>{inputValue}</p> */}
                {/* <div>{
                task.map((element, index) => {
                return <p>{element}<button onClick={index => deleteTask(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg></button></p>
                })}
                </div> */}
                <div>{task.length ? task.map((element, index) => {
                    return <p>{element}<button onClick={task.splice(index,1)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg></button></p>}) : "No hay tareas pendientes"}
                </div>
            </div>
        </>

    )
}

export default CreateTask;