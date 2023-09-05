import React, { useState } from 'react'
import './Task.css'

export default function Task({ todo, id,taskComplete, taskNewValue,deleteFunction }) {
    const[editButtonOn ,setEditButtonOn] = useState(false)  
    const[editValue, setEditValue] = useState(todo.todo)
    // When you click on save button this function run 
    const saveButtonHandler=(id)=>{
        if(editValue){
            taskNewValue(id,editValue);
        }else{
            setEditValue(todo.todo)
        }
        setEditButtonOn(false)
    }
    // When you click on edit button 
    const editButtonHandler=()=>{
        setEditButtonOn(true)
    }



   
    if (editButtonOn) {
         // If edit button is ON than this function is run and edit functionlity OPEN
        return (
            <li>
                <input
                    type="text"
                    id="editInput"
                    value={editValue}
                    onChange={e => setEditValue( e.target.value )}

                />
                <button className='onSave' onClick={()=>saveButtonHandler(id)} >Save</button>
            </li>
        )
    }
    return (
        <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>

                <input
                    className='checkbox'
                    type="checkbox"
                    id={id}
                    checked={todo.complete}
                    onChange={() => taskComplete(id)} // taskComplete come as a prop
                />
                {todo.todo}
            </label>
            <button 
                className={todo.complete ? "delete" : "onEdit"}  
                onClick={()=>{todo.complete ? deleteFunction() : editButtonHandler()}}>
                    {todo.complete ? "Delete" : "Edit"}
            </button>
        </li>
    )
}
