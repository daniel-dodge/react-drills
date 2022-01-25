import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () =>{
  const [change, setChange]= useState('')

  return (
    <div className="App">
      <input  id='a' onChange={(event)=>{setChange(event.target.value)}}></input>
      <p>{change}</p>
    </div>
  );
}

export default App;
