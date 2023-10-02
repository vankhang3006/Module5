import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Khi component được tạo, thực hiện GET request để lấy danh sách công việc từ API
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error('Error fetching todos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;