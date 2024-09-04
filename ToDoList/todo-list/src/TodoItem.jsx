import React from 'react';

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
  return (
    <li>
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleCompleted(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
