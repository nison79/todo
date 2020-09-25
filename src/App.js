import React, { useState } from 'react';
import './App.css';
import { Button, TextField } from "@material-ui/core"
import Todo from "./Todo"


function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);

  const addATodo = (event) => {
    event.preventDefault();
    setTodos([inputText,...todos]);
    setInputText("");
    console.log("todos list", [...todos,inputText]);
  }


  return (
    <div className="app">
      <h1>Plan your Day</h1>
      <div className = "app__textButton">
        <form>
          <TextField
          placeholder = "Write here"
          value={inputText} 
          onChange={event => setInputText(event.target.value)} 
          type = "text">
          </TextField>

          <Button
          size= "large"
          disabled ={!inputText}
          type = "submit"
          style ={{marginLeft : "40px" , background: "pink",color:"black"}}
          color = "secondary"
          variant = "outlined" 
          onClick ={addATodo} >
          Add a Plan
          </Button>

        </form>
      </div>

    {todos.map((todo) => (
        <Todo text ={todo}/>
    ))}


    </div>
  );
}

export default App;
