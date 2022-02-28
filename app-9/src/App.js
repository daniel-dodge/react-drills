import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"
import router from "./router.js"
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/details">Details</Link>
        </ul>
      </nav>
      <br/>
      {router}
    </div>
  );
}

export default App;
