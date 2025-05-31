import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { Form } from './Form'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditForm } from './EditForm';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        if (/^\d+$/.test(todo.trim())) {
            alert("Invalid task");
            return;
        }
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { todo, completed: !todo.completed } : todo))
}


    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = id => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };

    const editTask = (task, id) => {
        if (/^\d+$/.test(task.trim())) {
            alert("Invalid task");
            return;
        }
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        ));
    };

    return (
        <div className='wrap'>
            <h1>To Do List <FontAwesomeIcon icon={faListCheck} /></h1>
            <Form addTodo={addTodo} />
            {todos.map(todo => (
                todo.isEditing ? (
                    <EditForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            ))}
        </div>
    );
};
