import { onAuthStateChanged } from "firebase/auth";
import { collection,  onSnapshot, query } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { auth, db } from '../../../config/firebase';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);
  
  
  useEffect(() => {
    async function initApp() {
      const user = await new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          resolve(user);
        });
      });
  
      if (user) {
        const uid = user.uid;
        const dataSnapshot =  query(collection(db, uid))
          const dataList = onSnapshot(dataSnapshot, (snapshot)=> {
            const taskList = snapshot.docs.map((doc)=>doc.data())
            setTodos(taskList)
             console.log(taskList);
          })
        // Continue with your application logic that depends on user authentication.
      } else {
        // Handle the case where the user is not authenticated.
      }
    }
  
    initApp();
  }, [])
  






 

 



  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  )
}
