
import React from 'react'
import Contextprovider from './Context/Contextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <Contextprovider>
      <Login />
      <Profile/>
    </Contextprovider>
    
  )
}

export default App