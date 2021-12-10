import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Services";
import Login from "./Login";

import Navbar from "./components/Navbar";








function App(){
  
  return (
    <div>

    <Navbar/>
    
            <Routes>
                <Route exact path = "/" element = {<Home/>}/>
                <Route path="/about" element = {<About/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
                <Route path = "/service" element = {<Service/>}/>
                <Route path = "/login" element = {<Login/>}/>
            </Routes>
      
      

    </div>
    
    
  )
}


export default App;