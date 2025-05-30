import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { Form } from './Form'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {todo, completed: !todo.completed} : todo))
    }
    return (
        <div className='wrap'>
            <h1>
                To Do List <FontAwesomeIcon icon={faListCheck} />
            </h1>

            <Form addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} 
                toggleComplete={toggleComplete}/>
            ))}
        </div>
    )
}