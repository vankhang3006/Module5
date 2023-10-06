import React, { useState } from 'react';
import axios from 'axios';

function Create({ onTodoAdded }) {
    const [newTodo, setNewTodo] = useState('');
    const [alertMess, setAlertMess] = useState('');

    const handleSubmit = () => {
        axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                title: newTodo,
                completed: false,
            })
            .then((response) => {
                onTodoAdded(response.data);
                setNewTodo('');
                setAlertMess('Todo added successfully! ');
            })
            .catch((error) => {
                console.error('Error adding todo:', error);
                setAlertMess('Error adding todo.');
            });
    };

    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter new todo"
                value={newTodo}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <p>{alertMess}</p>
        </div>
    );
}

export default Create;