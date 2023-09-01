import React, { useContext, useState } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import "./Header.css";


export default function Header() {
  const [todos, setTodos] = useContext(DataContext);
  const [task, setTask] = useState("")

  const addData = (e) => {
    e.preventDefault();
    const newTodoAdd = [...todos, { name: task, complete: false }]
    setTodos(newTodoAdd)
    localStorage.setItem('taskStorage', JSON.stringify(newTodoAdd))
    setTask("")
  }
  return (
    <div>
      <header className="Header-container">
        <h1 className="Header"> My Task</h1>
        <form id="new-task" onSubmit={addData}>
          <input
            id="new-task-input"
            type="text"
            autoFocus
            placeholder="What do you have planned ?"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button className="submit" type="submit" disabled={!task}>Add Task</button>
        </form>
      </header>
    </div>
  );
}
