import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return(
        <div className="todo">
            <p onClick={() => toggleComplete(task.id)}
            className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} className="edit"
                onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} className="delete" 
                onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}