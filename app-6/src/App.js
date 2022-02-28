import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./ToDo.js"

function App() {
  const data = ['stuff','more stuff']
  const [tasks, updateTasks] = useState(data)
  let [input, changeInput] = useState('')
  let list = tasks.map((elem, index) => {
    return <Todo key={index} task={elem}/>
  })
  const handleTaskAdd = () => {
    updateTasks([...  tasks, input])
    input = ''
  }
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <input placeholder="Enter new task" onChange={e => {changeInput(e.target.value)}}></input>
      <button onClick={handleTaskAdd}>Add</button>
      {list}
      
    </div>
  );
}

export default App;
