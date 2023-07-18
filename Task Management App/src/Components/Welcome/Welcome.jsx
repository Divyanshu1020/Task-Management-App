import "./Welcome.css"

export default function Welcome() {
  return (
    <div className='Welcome'>
        <h1>Login</h1>
        <div className='login-Container'>
            <input 
              className="input"
              type="email" placeholder="Email" />
            <input 
              className="input"
              type="password"
              placeholder="Password" />
            <button className="sign">Sign In</button>
            <a href="">Creat account</a>
        </div>
    </div>
  )
}