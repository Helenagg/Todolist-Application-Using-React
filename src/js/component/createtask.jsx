import { element } from "prop-types";
import React, { useState } from "react";


const CreateTask = () => {

    const [inputValue, setinputValue] = useState([]); 
    const [task, setTask]  = useState([]);

    const inputChange = (event) => {
        setinputValue(event.target.value);        
    }

    const addTask = () => {
        setTask(task.concat(inputValue));        
    }

    const deleteTask = (index) => {
        setTask(task.filter((task,element)=> element!==index))
    }

    return (
        <>
            <div className="text-center">
                <input placeholder="Add a task" onChange={inputChange}></input>
                <button type="button" onClick={addTask} className="">Add</button>
                <div className="d-grid gap-2 col-3 p-5 mx-auto">{task.length ? task.map((element, index) => {
                    return <p className="border border-2 border-secondary">{element} <button type="button" className="btn btn-outline-danger" onClick={() => deleteTask(index)}> ❌</button></p>}) : "There are no pending tasks"}
                </div>
            </div>
        </>

    )
}

export default CreateTask;