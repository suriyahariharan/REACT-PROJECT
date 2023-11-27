import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function App() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    
    const login = async () => {
      if (!isAuthenticated) {
  
        await authenticate({ signingMessage: "Log in" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
          
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  
    const logOut = async () => {
      await logout();
      console.log("logged out");
    }
  
    return (
      <div>
        {/* <h1>Moralis Hello World!</h1> */}
        <button onClick={login}> Login</button>
        <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
      </div>
    );
  }
  
  export default App;