
import './App.css';
import MsgBox from './Components/MsgBox';
import Navbar from './Components/Navbar';
import React,{useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
// import Router from "react-router-dom";
// import Route from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const[Mode,setMode]=useState("light");
  const[alert,setalert]=useState(null);

  
  let changeColor=(event)=>{
    chco(event.target.id);
  }

  let chco=(btn)=>{
    if(Mode==="light"){
      if(btn==="red")
        document.body.style.backgroundColor="#EB455F";
      else if(btn==="yellow")
        document.body.style.backgroundColor="#F3ECB0";
      else if(btn==="green")
        document.body.style.backgroundColor="#68B984";
    }
    else{
      if(btn==="red")
        document.body.style.backgroundColor="#B73E3E";
      else if(btn==="yellow")
        document.body.style.backgroundColor="#FFC23C";
      else if(btn==="green")
        document.body.style.backgroundColor="#829460";
    }

  }

  let showAlert=(message,type)=>{
    setalert({msg:message,
              type:type
            })
    setTimeout(() => {
      setalert(null)
    },1500);
  };

  let theme=()=>{
    if(Mode==="dark"){
      setMode("light");
      showAlert("welcome to light mode","success");
      document.body.style.backgroundColor="#EAE0DA";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      // document.body.style.backgroundColor="black";
      showAlert("welcome to dark mode","success");
    }
  };
  return (
  <>
    <BrowserRouter>
    <Navbar name="TextUtils" about="About" theme={theme} Mode={Mode} color={changeColor}/>
    <Alert alert={alert}/>
    <Routes>
    <Route path="/" element={<MsgBox Mode={Mode} alert={showAlert}/>}></Route>
    <Route path="/About" element={<About Mode={Mode}/>}></Route>
    {/* <About/> */}
    </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;