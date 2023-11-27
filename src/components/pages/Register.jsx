import React , {useState} from "react"
import { useNavigate } from "react-router-dom";
export const Register = (props) => {

  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [name,setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  const Nav = useNavigate();
  return (
    <div className="auth-form-container">
     <form  className='register-form'  onSubmit={handleSubmit} >
        <label htmlFor="name">Full Name</label>
        <input value={name}  onChange={(e) => setName (e.target.value)} name="name" id="name" placeholder="Full Name"/>
        <lable htmlFor="email">Email</lable>
       <input value={email} onChange={(e) => setEmail(e.target.value)}type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
        <lable htmlFor="password">New Password</lable>
       <input  value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Type your password' id='password' name='password'/>
        <lable htmlFor="password">Confirm Password</lable>
       <input  value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Type your password' id='password' name='password'/>
       <button type='submit' onClick={()=>Nav('/')}>SIGN UP</button>
    </form>
    <button  className='link-btn'   onClick={() => props.onFormSwitch('login')} >Already have an account? Login here.</button>
    </div>
  )
}