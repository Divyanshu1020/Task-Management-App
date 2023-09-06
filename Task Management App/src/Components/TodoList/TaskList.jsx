import React, { useContext } from 'react'
import Task from './Component/Task/Task'
import { DataContext } from './DataProvider/DataProvider'
import "./TaskList.css"
import TodolistLoadingSkeleton from '../Loading Skeleton/Todolist Loading Skeleton/TodolistLoadingSkeleton'




export default function TaskList() {
  const {todos, setTodos} = useContext(DataContext)
  const {isLoading} = useContext(DataContext)
  console.log(isLoading);

  const updateLocalStorage=(newValue)=>{
    localStorage.setItem('taskStorage', JSON.stringify(newValue))
  }

  // When you click on checkbox, make task complete ture
  const taskComplete = (id) => {
    const newTodo = [...todos];
    newTodo.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
      setTodos(newTodo)
      updateLocalStorage(newTodo)
    }
    )
  }

  // Add new value to todos
  const taskNewValue=(id,editValue)=>{
    const newTodo = [...todos];
    newTodo.forEach((todo, index) =>{
      if (index === id) {
        todo.todo = editValue
      }
      setTodos(newTodo)
      updateLocalStorage(newTodo)
    }
    )
  }

  // simple delete function 
  const deleteFunction =()=>{
    const newTodo = todos.filter(todo => {
      if(!todo.complete){
        return todo
      }
    
    })

    setTodos(newTodo)
    updateLocalStorage(newTodo)
  }


 
  return (
    <ul className='tasks-list'>
      { isLoading ?(
        <>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        <TodolistLoadingSkeleton/>
        </>) : (
        
          todos.map((todo, index) => (
          <Task
            todo={todo}
            key={index}
            id={index}
            taskComplete={taskComplete}
            taskNewValue={taskNewValue}
            deleteFunction={deleteFunction}
             />
        ))
        )
      }
      
      
      

      
    </ul>
    
  )
}
