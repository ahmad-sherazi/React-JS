import React, { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcounter] = useState(0)
  
  const add = ()=>{
   if(counter == 20){
      setcounter(counter)
   } 
   else{
    setcounter(counter++)
   }
  }


  const rem = () =>{
    if(counter == 0){
      setcounter(counter)
    }
    else {
      setcounter(counter--)
    }
  }
  
  return (
    <>
    <div>counter {counter}</div>
    <button
    onClick={add}
    >ADD</button>
    <button
    onClick={rem}

    >REMOVE</button>
   
    </>
  )
}

export default App