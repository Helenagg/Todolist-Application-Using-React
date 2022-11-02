import { element } from "prop-types";
import React, { useState } from "react";


//const task = ['task1', 'task2', 'task3'];

const CreateTask = () => {

    const [inputValue, setinputValue] = useState(['There are no pending tasks']); 
    const [task, setTask]  = useState([]);

    const inputChange = (event) => {
        setinputValue(event.target.value);
    }

    const addTask = () => {
        //task.push(inputValue);
        setTask(task.concat(inputValue));
        console.log(task)
    }
    return (
        <>
            <div className="text-center">
                <input placeholder="Add a task" onChange={inputChange}></input>
                <button type="button" onClick={addTask}>Add</button>
                <p>{inputValue}</p>
                <div>{task.map((element) => {
                return <p>{element}</p>
                })}</div>
            </div>
        </>

    )
}

export default CreateTask;