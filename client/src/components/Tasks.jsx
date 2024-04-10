import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = 'http://localhost:3001';

function Tasks() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE}/tasks`);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_BASE}/task/${taskId}`);
      getTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  const handleAddTask = async () => {
    try {
      const response = await axios.post(`${API_BASE}/tasks`, { name: input });
      setInput("");
      getTasks(); 
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO</h1>
      </div>

      <div className="form">
        <input type='text' value={input} onChange={handleChange}></input>
        <button onClick={handleAddTask}>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist">  
        {items.map((item) => (
          <div className="todo" key={item._id}>
            <div className="text">{item.name}</div>
            <div className="delete-todo" 
            onClick={() => handleDeleteTask(item._id)}><span>X</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;