// TodoForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const [alert, setAlert] = useState('');

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = () => {
        // Thực hiện POST request để tạo công việc mới
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: task,
            completed: false,
        })
            .then((response) => {
                setAlert(`Task created with ID: ${response.data.id}`);
            })
            .catch((error) => {
                console.error('Error creating task:', error);
                setAlert('Error creating task');
            });
    };

    return (
        <div>
            <h2>Add Task</h2>
            <input type="text" placeholder="Enter task" value={task} onChange={handleTaskChange} />
            <button onClick={handleSubmit}>Submit</button>
            {alert && <p>{alert}</p>}
        </div>
    );
};

export default TodoForm;