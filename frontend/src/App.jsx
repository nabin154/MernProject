import React, { useEffect, useState } from 'react'
import {BrowserRouter, Route,Routes, useResolvedPath} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
const App = () => {
  const [userInfo , setUserInfo ] = useState();

  useEffect(()=>{
    const user = localStorage.getItem("userInfo");
    setUserInfo(user);
    console.log(userInfo);
 
  },[]);
  return (
  <>
  <BrowserRouter>
<Navbar/>
  <Routes>
    <Route path="/" element ={<Home userInfo = {userInfo}/>} />
    <Route path="/about" element ={<About/>} />
    <Route path="/services" element ={<Services/>} />
    <Route path="/contact" element ={<Contact/>} />
    <Route path="/register" element ={<Register/>} />
    <Route path="/login" element ={<Login/>} />
    <Route path="*" element ={<NotFoundPage/>} />
  </Routes>
  <Footer/>
  
  </BrowserRouter>
  </>
  )
}

export default App
