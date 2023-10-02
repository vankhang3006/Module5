// App.js
import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  return (
      <div>
        <TodoList />
        <TodoForm />
      </div>
  );
};

export default App;