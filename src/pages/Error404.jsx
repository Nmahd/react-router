import React from 'react'
import AnimationPage from '../components/AnimationPage'

const Error404 = () => {
  return (
    <>
    <div className='flex justify-center items-center'>
        <div>
    <h1 className='text-center text-7xl'>Error 404</h1><br/>
    <h2 className='text-center text-3xl'>Page not found</h2></div>
    <span><AnimationPage/></span>
    </div>
    </>
  )
}

export default Error404
