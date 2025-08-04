import React, { useState } from 'react'
import './App.css' 

function App() {
  const [color, setColor]=useState("olive")
  return (
    <div className="first"    style={{backgroundColor:color}}>
      <div>
      <button className='btn1'
        onClick={() => setColor("red")}
      >RED</button>
      <button className='btn2'
        onClick={() => setColor("black")}
      >BLACK</button>
      </div>
      
    </div>
  )
}

export default App