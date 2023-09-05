import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import "./Header.css";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../../config/firebase";
import { async } from "@firebase/util";


export default function Header() {
  const [todos, setTodos] = useContext(DataContext);
  const [task, setTask] = useState("")

  const userId = String(auth.currentUser?.uid)

  
  




  const addData = async (e) => {
    e.preventDefault();
    // const newTodoAdd = [...todos, { name: task, complete: false }]
    // setTodos(newTodoAdd)
    await addDoc(collection(db, userId), {
      todo: task,
      complete: false
    })
    // console.log("Result",result);

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
