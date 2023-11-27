import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {Buffer} from 'buffer';
import fileToArrayBuffer from 'file-to-array-buffer';
import "./manager.css";
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Userdashboard() {
    let [status,setStatus] = useState(false)
   let [state,setState] = useState({ selectedFile: null })
   const[reports,setReports]=useState([]);
   const[success,setSuccess]=useState("");
   const[text1,setText1]=useState("");
   const[text2,setText2]=useState("");
   const fileChangedHandler = (event) => {
    setState({ selectedFile: event.target.files[10] })
  }
  const changehandle1 = (event) => {
    setText1(event.target.value)
  }
  const changehandle2 = (event) => {
    setText2(event.target.value)
  }

  const uploadHandler = () => {
    console.log(state.selectedFile)
    fileToArrayBuffer(state.selectedFile).then(data => {
        const buf = Buffer.from(data)
        console.log(buf)
        setReports(buf);
  })}

async function Work() {
    

    {await axios.post(`https://i.pinimg.com/1200x/63/6c/30/636c30932098703ba401bdeae3fc7a67.jpg`,{"patient":text1,"doctor":text2,
                     "manager":"0x0BFb4abc6864e8EE3782C7Cc246b646E568b8631",
                    "image":`${reports}`}, {
        headers: {
            'Authorization':'Bearer 62324ec714797e008a8409e6'
        }
    }).then((res) => {
        console.log(res.data);
        setSuccess(res.data.message)
    })}


}
useEffect(()=>Work(),[])
const navi = useNavigate();
  return (
    <>
    <Dashboard>
    <Navbar />
        <Main>
            <Top src='dashboard_top.png' />
            <Certificate className='mager'>Manager Desk</Certificate>
            <input className='choose' id='selectfile'  type="file"  onChange={fileChangedHandler}/>
            <button className='upload'  onClick={uploadHandler}>Upload</button>
            <input className='patient' id='patient'  type="text" placeholder='Patient'  onChange={changehandle1}/>
            <input className='doc' id='doctor'  type="text" placeholder='doctor' onChange={changehandle2}/>
            <button className='sub' onClick={() => navi('/')}>Submit</button>
            <span className='suc'>{success}</span>
        </Main>
        <Footer />
        </Dashboard>
    </>
  )
}

export default Userdashboard

const Dashboard = styled.div`
// display: flex;
// flex-direction: row;
background-color:#121212;
width:100vw;
height:100vh;
`
const Sidebar = styled.div`
// display:none;
    position: fixed;
    background-color:black;
    color:white;
    z-index:12;
    width: 269px;
    // height: 100vh;
    transition: all 0.6s ease;
    top:0;
    bottom:0;
    left:0;
    transform:${props => props.show ? 'translateX(0%)':'translateX(-100%)'};
`
const Main = styled.div`
// background-color:#121212;
    
`
const AddButton = styled.a`
    position:absolute;
    display:flex;
    cursor:pointer;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:92px;
    height:92px;
    background:linear-gradient(360deg, #9B53C7 -91.3%, #1260FD 362.5%);
    left:87vw;
    top:21vh;
    span{
        position:absolute;
        font-size:82px;
        top:-17px;
        color:#121212;
    }
`
const Certificate = styled.div`
color:#E5E5E5;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 47px;
line-height: 55px;
padding-left:20px;
`
const Blank = styled.img`
    width: 385px;
    height: 325px;
`
const Top = styled.img`
    width:100vw;
    height:27vh;
`
const BlankPresentation = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    div{
        color:#AAA6A6;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 59px;
    }
`
const SidebarNav = styled.div`
position:absolute;
`
const Profile = styled.div`
    height:150px;
    display:flex;
    justify-content: center;
    svg{
        height:150px;
        width:100px
    }
`
const Name = styled.div`
    display:flex;
    justify-content:center;
    font-size:30px;
`
const Logout = styled.div`
    display:flex;
    width:100%;
    position: absolute;
    justify-content:center;
    bottom:15vh;
    cursor:pointer;
    

`
const D= styled.img`
    height:150px;
    width:200px;

`
const Cert = styled.div`


`
const CertName=styled.span`
color:white;


`