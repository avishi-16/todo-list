import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { Form } from './Form'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditForm } from './EditForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

   const editTodo = (id) => {
    setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ))
}
    
   const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ?
        {...todo, task, isEditing: !todo.isEditing}: todo
    ))
   }

    return (
        <div className='wrap'>
            <h1>
                To Do List <FontAwesomeIcon icon={faListCheck} />
            </h1>

            <Form addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditForm editTodo={editTask}
                    task={todo}/>
                ) : (
                    <Todo 
                    task={todo}
                    key={todo.id}
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} 
                    editTodo={editTodo} />
                )
            ))}
        </div>
    )
}