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
  const taskComplete = () => {
    const newTodo = [...todos];
    newTodo.forEach((todo) => {
        todo.complete = !check
    }
    )
    setTodos(newTodo)
    setCheck(!check)
  }


  return (
    <div className='row'>
      <label htmlFor="all">
        <input
          checked={check}
          onClick={taskComplete}
          className='checkbox'
          type="checkbox"
          name='all'
          id='all' 
            readOnly
          />
        All
      </label>
      <p>You have 0 to do</p>
      <button id='delete' onClick={deleteFunction}>Delete All</button>
    </div>
  )
}
