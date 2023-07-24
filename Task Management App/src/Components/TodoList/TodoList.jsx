import React from "react";
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import { DataProvider } from "./DataProvider/DataProvider";
import TaskList from './TaskList'



export default function TodoList() {
  return (
    <DataProvider>
      <div className="container">
        <Header />
        <TaskList />
        <Footer></Footer>
      </div>
    </DataProvider>

  )
}

