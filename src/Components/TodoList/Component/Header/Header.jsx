import React, { useContext, useState } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import "./Header.css";


export default function Header() {
  const [todos, setTodos] = useContext(DataContext);
  const [task, setTask] = useState("")

  const addData = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: task, complete: false }])
    setTask("")
  }
  return (
    <div>
      <header>
        <h1> My Task</h1>
        <form id="new-task" onSubmit={addData}>
          <input
            id="new-task-input"
            type="text"
            autoFocus
            placeholder="What do you have planned ?"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button type="submit" disabled={!task}>Create</button>
        </form>
      </header>
    </div>
  );
}
