import React, { useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function Profile() {
  const{user} = useContext(Usercontext)
  
  if(!user) return <div>Try Again</div>

  return <div>UserName = {user.username} & Password = {user.password} </div>

}


export default Profile