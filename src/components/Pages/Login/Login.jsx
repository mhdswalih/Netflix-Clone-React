import React, { useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import { login,signUp } from '../../../Firebase/firebase'
const Login = () => {
  const [signState,setSignState] = useState('Sign In')
  const [name,setName] = useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const user_auth = async(event)=>{
    event.preventDefault()
    if(signState === "Sign In"){
      await login(email,password)
    }else{
      await signUp(name,email,password)
    }
  }
  
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState === 'Sign Up'?<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your name' />
:<></>}
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your Email'/>
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="from-swich">
          {signState === 'Sign In'?  <p>New To Netflix ?<span onClick={()=>{setSignState('Sign Up')}}>Sign Up Now</span></p>: <p>Alrady have account ?<span onClick={()=>{setSignState('Sign In')}}>Sign In Now</span></p>}
        
         
        </div>
      </div>
    </div>
  )
}

export default Login