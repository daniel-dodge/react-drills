import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const data = ['apple','bottom','jeans']
  const [text, stringsFunction] = useState(data)
  let displayedText = text.map((elem,index)=>{
    return <h2 key={index}>{elem}</h2>
  })
  return (
    <div className="App">

    {displayedText}
      
      

    </div>
  );
}

export default App;
