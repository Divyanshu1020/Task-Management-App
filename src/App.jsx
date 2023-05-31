
import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import TodoList from './Components/TodoList/TodoList';
import Welcome from './Components/Welcome/Welcome';

function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/todo' element={<TodoList />} />
          <Route path='/' element={<Welcome/>} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
