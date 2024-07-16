import { useState, useEffect } from "react";
import axios from 'axios';

const InputCreate = () => {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');
    const [newTask, setNewTask] = useState('');

    const handleEnviar = async (e) =>{
      e.preventDefault();
      if (task.trim() !== '') {
        console.log('task:' + task);
          try {
              const response = await axios.post('http://localhost:3000/create', {title: task});
              setNewTask(response.data);
              console.log(newTask);
              setTask('');
          } catch (err) {
              setError(err);
              console.log(error);
          }
      }
      else {
        alert('El nombre de la tarea no puede estar vacío!');

      }
    }

    return (
      <>
        <div className='input-class'>
            <input
                type="text"
                name="task"
                value={task}
                placeholder="Escribe una tarea"
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleEnviar}>Enviar</button>
        </div>
        <div>
          Nueva tarea insertada: {newTask.title}
        </div>
      </>
   
    );
  };
  
  export default InputCreate;
