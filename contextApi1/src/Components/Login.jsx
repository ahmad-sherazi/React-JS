import React, { useState, useContext } from 'react'
import Usercontext from '../Context/Usercontext'
import {Link} from 'react-router-dom'



function Login() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const {setUser} = useContext(Usercontext)

    const handler = (e)=> {
        e.preventDefault()
        setUser({username , password})
    }

    


  return (
    <>
    <input type="text" value={username} 
    onChange={(e)=>setUsername(e.target.value)}
    />
    <input type="password" value={password} 
    onChange={(e)=>setPassword(e.target.value)} />
    <button onClick={handler}>submit</button>

    {/* <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link> */}
    </>
  )
}

export default Login