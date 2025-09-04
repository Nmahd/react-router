import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'

const LandingPage = () => {

      let [users,setUsers] = useState([])

    let fetchUsers = async () =>{
        try {
            let data = await fetch('https://dummyjson.com/users').then(res => res.json())
            console.log(data)
            setUsers(data.users)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
      fetchUsers();


    },[])

  return (
  <>
   
    <div className='flex flex-col justify-center items-center m-5' >
      <p className='font-bold text-4xl'>Users</p>
      {users.map((item)=>(
        
        <div key={item.id} className=' border border-indigo-600 bg-linear-to-r from-[#2f2f2f] to-[#171717] size-full p-10 m-6 rounded-xl shadow-[0px_0px_30px_#8200DB]' >
          
           <img src={item.image} alt="images" />
           <div>Id : {item.id} </div>
          <div>First name : {item.firstName}</div>
          <div>Last name : {item.lastName}</div>
          <div>Age : {item.age}</div>
          <div> Address : { item.address.address} ,
                        { item.address.city} ,
                        { item.address.country} ,
                        { item.address.postalCode} ,
                        { item.address.state} ,
                        { item.address.stateCode}


          </div>
          <div>Email : {item.email}</div>
          <div>Gender : {item.gender}</div>
          <div>Bloogroup : {item.bloodGroup}</div>
         
        
        
        
        </div>
       



      )

    )}


    </div>
 
  </>
  )
}

export default LandingPage
