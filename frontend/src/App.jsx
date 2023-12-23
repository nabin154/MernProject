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
import AdminPanel from './pages/Admin/AdminPanel';
import AdminServices from './pages/Admin/AdminServices';
import AdminHome from './pages/Admin/AdminHome';
import AdminContact from './pages/Admin/AdminContact';
const App = () => {
 
  return (
  <>
  
<Navbar/>
  <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/about" element ={<About/>} />
    <Route path="/services" element ={<Services/>} />
    <Route path="/contact" element ={<Contact/>} />
    <Route path="/register" element ={<Register/>} />
    <Route path="/login" element ={<Login/>} />
    <Route path='/admin' element={<AdminPanel/>}>
      <Route element={<AdminHome/>} index/>

      <Route path='services' element={<AdminServices/>}/>
      <Route path='contact' element={<AdminContact/>}/>
    </Route>
    <Route path="*" element ={<NotFoundPage/>} />
  </Routes>
  <Footer/>
  
  </>
  )
}

export default App
