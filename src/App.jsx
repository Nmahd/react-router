import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import { Link, Outlet } from 'react-router'
import Error404 from './pages/Error404.jsx'

function App() {


  return (
    <>
    <Navbar/>
     <Routes>
     
     
     <Route path='/' element={<LandingPage/>} />
     <Route path='/login' element={<LoginPage/>}/> 
     <Route path='/register' element={<RegisterPage/>}/> 
     <Route path='*' element={<Error404/>}/> 

      </Routes>
      <Outlet/>
    </>
  )
}

export default App
