import React, { useEffect } from "react";
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import { DataProvider } from "./DataProvider/DataProvider";
import TaskList from './TaskList'
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";







export default function TodoList() {

  const navigate = useNavigate();
  //if user not login send it to login page
  useEffect(() => {
   auth.onAuthStateChanged(user=>{
    if(!user){
      navigate("/login")
    }
  })
  }, [])
  
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

