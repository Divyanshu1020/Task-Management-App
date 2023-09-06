import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../Firebase/firebase';
import "./Signin.css";

export default function Signup() {
  const navigate = useNavigate()
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
    repass: ""
  })
  const [errorMessage, seteErrorMessage] = useState("");
  const [signButtonDisabled, setSignButtonDisabled] = useState(false)


  const signUpHandler = () => {
    //checking all fields are fill or not
    if (!value.name || !value.email || !value.pass || !value.repass) {
      seteErrorMessage("*Fill all fields*")
      return
    }
    if (value.pass != value.repass) {
      seteErrorMessage("*Password not match*")
      setValue((prev) => ({ ...prev, pass: "", repass: "" }))
      return
    }
    seteErrorMessage("")
    setSignButtonDisabled(true)

    // *Creating new user
    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then(async (userCredential) => {
        // Signed in 
        setSignButtonDisabled(false)
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: value.name
        })
        navigate("/login")
        // ...
      })
      .catch((error) => {
        setSignButtonDisabled(false)
        alert(error.message)
        seteErrorMessage(error.message)
      });

  }

  return (
    <div className='Signup'>
      <h1 className='signup-header'>Sign-Up</h1>
      <div className='signup-Container'>
        <div className="inputGroup">
          <input
            className="input"
            type="name" placeholder="Name"
            value={value.name}
            onChange={e => setValue((prev) => ({ ...prev, name: e.target.value }))}
          />
          <label
            className="label"
          >
            Name
          </label>
        </div>
        <div className="inputGroup">
          <input
            className="input"
            type="email" placeholder="Email"
            value={value.email}
            onChange={e => setValue((prev) => ({ ...prev, email: e.target.value }))}
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
            value={value.pass}
            onChange={e => setValue((prev) => ({ ...prev, pass: e.target.value }))}
          />
          <label
            className="label"
          >
            Password
          </label>
        </div>
        <div className="inputGroup">
          <input
            className="input"
            type="password"
            placeholder="Repeat Password"
            value={value.repass}
            onChange={e => setValue((prev) => ({ ...prev, repass: e.target.value }))}
          />
          <label
            className="label"
          >
            Repeat Password
          </label>
        </div>
        <button
          className="signup"
          onClick={() => signUpHandler()}
          disabled={signButtonDisabled}
        >Create Account</button>
        <p className='erroeMsg'>{errorMessage}</p>
        <p className="already"> Already have an account?<Link to={'/login'}><a href="">log in</a></Link></p>

      </div>

    </div>

  )
}

