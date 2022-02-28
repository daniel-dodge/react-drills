import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import Todo from "./Todo.js"
import NewTask from './NewTask.js'
import List from './List.js'

function App() {
  const data = ['stuff','more stuff']
  const [tasks, updateTasks] = useState(data)
  const handleTaskAdd = (task) => {
    updateTasks([...tasks, task])
  }

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add = {handleTaskAdd}/>
      <List tasks={tasks}/>
      
    </div>
  );
}

export default App;
