import React from 'react'
import "./Todo.css"
import { Cancel } from '@material-ui/icons';


function Todo(props) {
    return (
        <div className = "todo">
        
            <div className = "todo__box">
                    <h2>{props.text}</h2>
            </div>
            <div className = "todo__cancel">
            <Cancel/>
            </div>
        </div>

    )
}

export default Todo
