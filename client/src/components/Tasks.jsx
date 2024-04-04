import { useEffect, useState } from "react";
import axios from "axios";


const API_BASE = 'http://localhost:3001'; // Cambia la URL base a localhost:3001

function Tasks() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    GetTasks();
  }, []);

  const GetTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE}/tasks`); // Cambia la ruta a /tasks
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_BASE}/task/${taskId}`);
      // Vuelve a cargar las tareas después de la eliminación
      GetTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO</h1>
      </div>

      <div className="form">
        <input type='text'></input>
        <button>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist">  
      
        {items.map((item, index) => (
          <div className="todo" key={index}>
            <div className="text">{item.text}</div> 
            <div className="delete-todo" 
            onClick={() => handleDeleteTask(item.id)}><span>X</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;