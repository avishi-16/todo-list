import React, {useState} from "react";

export const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("")
}

    return(
        <form className="Form" onSubmit={handleSubmit}>
        <input type="text" className="form-input"
        value = {value} placeholder="Update Task" 
        onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="form-btn" disabled={value.trim() === ""}>Update Task</button>
        </form>
    )
}