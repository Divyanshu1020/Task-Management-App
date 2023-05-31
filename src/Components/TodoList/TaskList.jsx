import React, { useContext } from 'react'
import Task from './Component/Task/Task'
import { DataContext } from './DataProvider/DataProvider'


export default function TaskList() {
  const [todos, setTodos] = useContext(DataContext)
  const taskComplete = (id) => {
    const newTodo = [...todos];
    newTodo.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
      setTodos(newTodo)
    }
    )
  }
  return (
    <ul>
      {
        todos.map((todo, index) => (
          <Task
            todo={todo}
            key={index}
            id={index}
            taskComplete={taskComplete} />
        ))

      }
    </ul>
  )
}
