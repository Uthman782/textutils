import "./App.css";
// import React from "react";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Carousel from "./components/Carousel";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
export default function App() {
  const [mode, setMode] = useState('light');
  const [dSwitch, setSwitch] = useState({
    background: '#ffa',
    border:'2px solid white',
    color: 'white'
  })
  const handleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#626466';
      document.body.style.color = 'white'
      setSwitch({
        background: '#33404ce3',
        border:'2px solid white',
        color: 'white'
      })
        document.title = "Dark Mode Enable"
      // setInterval(()=>{
      //   document.title = "Dark Mode has been On"
      // },2000)
      // setInterval(()=>{
      //   document.title = "You Wanna Off dark mode"
      // },2500)
    }
    else{
      setMode('light')
      document.title = "Light Mode Enable"
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      setSwitch({
        background: 'white',
        border:'2px solid white',
        color: 'black'
      })
    }
  }
  return (
    <>
    {/* <Router> */}
        <Navbar title="Hello" mode = {mode} enableMode={handleMode} switchBg= {dSwitch}/>
      <Carousel/>
        {/* 👇️ Wrap your Route components in a Routes component */}
        {/* <Routes> */}
          {/* <Route  exact path="/about" element={<About />} /> */}
          {/* <Route  exact path="/" element={<TextForm mode = {mode} />} /> */}
          <TextForm mode = {mode} />
        {/* </Routes> */}
      {/* </div> */}
    {/* </Router> */}
      </>
  );
}

  // return <>
  // <Navbar title="Hello" mode = {mode} enableMode={handleMode} switchBg= {dSwitch}/>
  // <TextForm enterDHeading="Enter Text to analyze" 
  // mode = {mode} 
  // convertDHeading="Converted Text" />
  // </>
// }

