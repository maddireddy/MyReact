import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleCompleted={toggleCompleted} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
