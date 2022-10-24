import './App.css';
import { useState } from 'react';
import AddTaskForm from "./components/AddTaskForm"
import ToDo from './components/ToDo'

  function App() {
    const [toDo, setToDo] = useState([]);

    // Temp State
    const [newTask, setNewTask] = useState('');
    
    // Add task 
    ///////////////////////////
    const addTask = () => {
      if (newTask) {
        let num = toDo.length + 1;
        let newEntry = { id: num, title: newTask, status: false }
        setToDo([...toDo, newEntry])
        setNewTask('');
      }
    }

    // Delete task 
    ///////////////////////////
    const deleteTask = (id) => {
      let newTasks = toDo.filter(task => task.id !== id)
      setToDo(newTasks);
    }

    return (
      <div className="App">
        <div className="container App">


          <h2>To Do List App</h2>


          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />

          {/* Display ToDos */}

          {toDo && toDo.length ? '' : 'No Tasks...'}

          <ToDo
            toDo={toDo}
            deleteTask={deleteTask}
          />

        </div>
      </div>
    );
  }

export default App;
