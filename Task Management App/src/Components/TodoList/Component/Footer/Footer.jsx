import React,{useState,useContext} from 'react'
import "./Footer.css"
import { DataContext } from '../../DataProvider/DataProvider'
import { auth } from '../../../../config/firebase'
import { signOut } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom'



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

  const navigate = useNavigate()
    // * Sing out 
  const signOutHandler=()=>{
    signOut(auth)
    .then(()=>{
      navigate("/login")
    })
    .catch((error) => {
      alert(error.massage)
    });
  }

  return (
    <div className='row'>
      {/* <p className='mags'>You have 0 to do</p> */}
      {/* <button id='delete' onClick={deleteFunction}>Delete All</button> */}
        <button id='delete'  onClick={()=> signOutHandler()} > Sign Out</button>
      
    </div>
    
  )
}
