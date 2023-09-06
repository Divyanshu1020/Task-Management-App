import React from 'react'
import "./Footer.css"
import { auth } from '../../../../config/firebase'
import { signOut } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom'



export default function Footer() {
  
 



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
        <button id='delete'  onClick={()=> signOutHandler()} > Sign Out</button>
    </div>
    
  )
}
