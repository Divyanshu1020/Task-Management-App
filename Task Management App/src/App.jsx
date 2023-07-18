import './App.css'
import TodoList from './Components/TodoList/TodoList';
function App() {


  return (
    <div className='App'>
        {/* <Routes>
          <Route path='/todo' element={<TodoList />} />
          <Route path='/' element={<Welcome/>} />
        </Routes> */}
        <TodoList />
      </div>
  )
}

export default App
