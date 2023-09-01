import './App.css'
import React from 'react'
import TodoList from './Components/TodoList/TodoList';
import Login from './Components/Login/Login'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signup from './Components/SignUp/Signup';

function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signin' element={<Signup/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App
