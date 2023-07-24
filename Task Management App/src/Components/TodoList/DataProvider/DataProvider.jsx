import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);
  // useEffect(()=>{
  //   const taskStorage = JSON.parse(localStorage.getItem('taskStorage'));
  //   console.log(taskStorage);
  //   setTodos(taskStorage)
  // },[])




  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  )
}
