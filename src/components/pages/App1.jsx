import React ,{useState}from 'react'
import './App1.css';
import { Login } from './Login';
import { Register } from './Register';
function App1() {
  const [currentForm, setCurrentFrom] = useState('login');

  const toggleForm = (forName) => {
    setCurrentFrom(forName);
    
  }
  return (
     <div className='App'>
      {
        currentForm === "login" ?  <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
     </div>
  )
 }


export default App1;