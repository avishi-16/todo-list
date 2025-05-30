import React, {useState} from "react";

export const Form = ({addTodo}) => {
    const [value, setValue] = useState("")

const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)
    setValue("")
}

    return(
        <form className="Form" onSubmit={handleSubmit}>
        <input type="text" className="form-input"
        value = {value} placeholder="What is the task today?" 
        onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="form-btn">Add Task</button>
        </form>
    )
}