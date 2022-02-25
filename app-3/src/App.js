import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const data = ['apple','bottom','jeans']
  const [inputText,setChange]= useState('')
  const [text, stringsFunction] = useState(data)
  let filteredText = text.map((elem,index)=>{
    if(elem.includes(inputText)){
    return <h2 key={index}>{elem}</h2>
    }
  })
  return (
    <div className="App">
    <input onChange={(event)=>{setChange(event.target.value)}}></input>
    {filteredText}
      
      

    </div>
  );
}

export default App;
