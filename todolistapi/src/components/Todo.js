// Todo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import Create from './Create';

export function Todo() {
    const [todos, setTodos] = useState([]);
    const [alertMess, setAlertMess] = useState('');

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleTodoAdded = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h1>Todo list</h1>
            <Create onTodoAdded={handleTodoAdded} />
            <p>{alertMess}</p>
            <List todos={todos} />
        </div>
    );
}