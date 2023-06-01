import React,{useState,useContext} from 'react'
import "./Footer.css"
import { DataContext } from '../../DataProvider/DataProvider'

export default function Footer() {
  const [check, setCheck] = useState(false)
  const [todos,setTodos] = useContext(DataContext)
  const deleteFunction =()=>{
    const newTodo = todos.filter(todo => {
      if(!todo.complete){
        return todo
      }
    
    })

    setTodos(newTodo)
    
  }
  return (
    <div className='row'>
      <label htmlFor="all">
        <input
          checked={check}
          className='checkbox'
          type="checkbox"
          name='all'
          id='all' />
        All
      </label>
      <p>You have 0 to do</p>
      <button id='delete' onClick={deleteFunction}>Delete</button>
    </div>
  )
}
