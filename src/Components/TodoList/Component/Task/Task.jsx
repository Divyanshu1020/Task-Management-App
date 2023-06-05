import React, { useState } from 'react'
import './Task.css'

export default function Task({ todo, id,taskComplete, taskNewValue }) {
    const[editButtonOn ,setEditButtonOn] = useState(false)  
    const[editValue, setEditValue] = useState("")
    const saveButtonHandler=(id)=>{
        taskNewValue(id,editValue);
        setEditButtonOn(false)
    }
    const editButtonHandler=()=>{
        setEditButtonOn(true)
    }
    if (editButtonOn) {
        return (
            <li>
                <input
                    type="text"
                    id="editInput"
                    value={editValue}
                    onChange={e => setEditValue( e.target.value )}

                />
                <button onClick={()=>saveButtonHandler(id)} >Save</button>
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
                    onChange={() => taskComplete(id)}
                />
                {todo.name}
            </label>
            <button disabled={todo.complete} onClick={editButtonHandler}>Edit</button>
        </li>
    )
}
