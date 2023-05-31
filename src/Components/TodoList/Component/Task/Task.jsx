import React from 'react'
import './Task.css'

export default function Task({ todo, id,taskComplete }) {
    
        
    
    
    return (

        <li>
            <label htmlFor={id} className={todo.complete ? "active":""}>

                <input
                    type="checkbox"
                    id={id}
                    checked={todo.complete}
                    onChange={()=> taskComplete(id)}
                    />
                {todo.name}
            </label>
            <button>Edit</button>
        </li>

    )
}
