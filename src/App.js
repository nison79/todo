import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);

  const addATodo = () => {
    
    setTodos([...todos,inputText]);
    setInputText("");
    console.log("todos list", [...todos,inputText]);
  }


  return (
    <div className="app">
      <h1>Todo app</h1>

      <input 
      value={inputText} onChange={event => setInputText(event.target.value)} 
      type = "text">
      </input>
      <button onClick ={addATodo} >Add a TODO</button>
    </div>
  );
}

export default App;
