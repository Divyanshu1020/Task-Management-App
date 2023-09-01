import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

import React, { useEffect, useState } from "react";
import "./Login.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signButtonDisabled, setSignButtonDisabled] = useState(false)

  // // check if user is login or not
  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if(user){
  //       navigate("/")
  //     }
  //   })
  // }, [])


  // * sign up handler
  const signUpHandler = () => {
    setSignButtonDisabled(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // after sign in user navigate to home page (todo list)
        setSignButtonDisabled(false)
        navigate("/")
      })
      // catching error 
      .catch((error) => {
        setSignButtonDisabled(false)
        alert(error.massage)
      });
  }



  return (
    <div className='Login'>
      <h1 className="Login-header">Login</h1>
      <div className='login-Container'>
        <div className="inputGroup">
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label
            className="label"
          >
            Email
          </label>
        </div>
        <div className="inputGroup">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label
            className="label"
          >
            Password
          </label>
        </div>
        <button
          className="sign"
          onClick={() => signUpHandler()}
          disabled={signButtonDisabled}
        >Login</button>
        <p className="linkp">Not registered? <Link to={'/signin'}><a href="">Creat account</a></Link></p>
      </div>
    </div>
  )
}