import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    if (newTask.trim() !== '') {
      const updatedTasks = tasks.concat(newTask);
      setTasks(updatedTasks);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter(function (_, i) {
      return i !== index;
    });
    setTasks(updatedTasks);
  }

  return (
      <div className="App">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={function (e) {
              setNewTask(e.target.value);
            }}
            placeholder="Enter a new task"
          />
          <button className='add' onClick={addTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map(function (task, index) {
            return (
              <li key={index}>
                {task}
                <button onClick={function () { deleteTask(index); }}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
  );
}

export default App