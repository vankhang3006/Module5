import React from 'react';

function List({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default List;