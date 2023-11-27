import React, { useState } from "react";
import "./App.css";
import { useMoralis } from 'react-moralis';
import Home from "./components/pages/Home";
import Manager from './components/managerdashboard/manager'
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Reports from "./components/pages/Reports";
import SignUp from "./components/pages/SignUp";
import Doctor from './components/doctordashboard/doctor';
import { Login } from "./components/pages/Login";
import {Register} from "./components/pages/Register";
import App1 from "./components/pages/App1";
function App() {
  return (
    <>
        
      <Router>
        <Routes>
          <Route path="/"  element={<Home/>} />
           
          <Route path="/Login" element={<App1/>}/>
          {/* <Route path="/Register" element={Register}/> */}
          <Route path="/doctor" element={<Doctor />} /> 
          <Route path="/manager" element={<Manager/>}/>
          </Routes>
      </Router>
    </>

  );
}

export default App;