import React, { useState } from 'react';
import './App.css';
import { Button, TextField } from "@material-ui/core"
import Todo from "./Todo"
import {useSpring, animated} from 'react-spring'


function App() {
  const props = useSpring({opacity:1,color:"rgb(37, 206, 209)",fontSize:"70px" , from:{opacity:0 ,fontSize:"5px",color:"black"}})
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
      <animated.div  style={props}><h1>Plan your Day</h1></animated.div>
            
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
          style ={{marginLeft : "40px" , background: "rgb(119, 172, 162)",color:"white",}}
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
