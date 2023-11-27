import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
export const Login = (props) => {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(email);
  }
 const Navigate = useNavigate();
  return (
    <div className='auth-form-container' >
    <form  className='login-form' onSubmit={handleSubmit} >
        <lable for="email">Email</lable>
       <input value={email} ocnChange={(e) => setEmail(e.target.value)}type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
        <lable for="password">Password</lable>
       <input  value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Type your password' id='password' name='password'/>
       <button type='submit' onClick={()=>Navigate('/')}>Log In</button>
    </form>
    <button  className='link-btn' onClick={() => props.onFormSwitch('register')} >Don't have an account? Register here.</button>
    </div>
  )
}