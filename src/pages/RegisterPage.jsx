import React from 'react'
import Navbar from '../components/Navbar.jsx'
const RegisterPage = () => {
  return (
   <>
      <div className='flex justify-center items-center m-30'>
    <div className='flex flex-col justify-center items-center h-auto border border-indigo-600 bg-linear-to-r from-[#2f2f2f] to-[#171717] rounded-xl shadow-[0px_0px_30px_#8200DB] gap-5 p-10' >
   <h2 className='text-4xl'>Sign up</h2>
   <p>Enter your details below</p>
      <input type="text" placeholder='First Name' className='bg-black h-10 w-80 p-5' />
   <input type="text" placeholder='Last Name' className='bg-black h-10 w-80 p-5' />
   <input type="text" placeholder='Last Name' className='bg-black h-10 w-80 p-5' />
   <input type="email" placeholder='Enter your Email address' className='bg-black h-10 w-80 p-5' />
   <input type="password" placeholder='Enter password' className='bg-black h-10 w-80 p-5' />
    <button className=' bg-purple-700  hover:bg-white hover:text-black p-3 rounded-md m-2 focus:outline-2'>Register</button>

    </div>
</div>
   
   </>
  )
}

export default RegisterPage
