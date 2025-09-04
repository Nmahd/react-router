import React from 'react'
import App from '../App.jsx'
import logo from '../assets/account-logo.png'



import { Link, Outlet } from 'react-router'
const Navbar = () => {
  return (
  <>


<div className='flex bg-[#252525a1] h-auto w-auto justify-between px-5'>
    
 <img className='h-15' src={logo} alt="logo"   />

  <div className='flex'> 
    <Link className=' bg-purple-700 hover:bg-white hover:text-black p-3 rounded-md m-2 focus:outline-2' to='/'> <button>Home</button></Link>
    <Link className=' bg-purple-700 hover:bg-white  hover:text-black p-3 rounded-md m-2 focus:outline-2' to='/login'> <button>Login</button></Link>
    <Link  className=' bg-purple-700 hover:bg-white  hover:text-black p-3 rounded-md m-2 focus:outline-2'to='/register'> <button>Register</button></Link>
     </div>

</div>

  </>

  )
}

export default Navbar
