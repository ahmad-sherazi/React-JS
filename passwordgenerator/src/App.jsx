import React, { useCallback, useState, useEffect,useRef } from 'react'

function App() {
const [Length,setLength]=useState(8)
const [Num,setNum]=useState(false)
const [Ch,setCh]=useState(false)
const [Password,setPassword]=useState()
const PassRef = useRef(null)

const PassReference = useCallback(() => {
  PassRef.current?.select();
window.navigator.clipboard.writeText(Password)
},[Password])

const PassGenerator = useCallback(() => {
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(Num) str+="0123456789"
if(Ch)  str +="~!#$%^&*()_"

for (let i = 1; i <= Length; i++) {
  let char = Math.floor(Math.random()*str.length+1);
  pass += str.charAt(char)
  }
  setPassword(pass)
},
  [Length,Num,Ch])


   useEffect(() => {
    PassGenerator()
  }, [Length, Num, Ch, PassGenerator])




  return (
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={PassRef}
            readOnly
        />
        <button onClick={PassReference}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={18}
        value={Length}
        onChange={(a) => {setLength(a.target.value)}}
         className='cursor-pointer'
          />
          <label>Length : {Length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked = {Num}
          id="numberInput"
          onChange={()=>{
            setNum((prev)=> !prev)
          }}
          
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              defaultChecked = {Ch}
              onChange={() =>(
                setCh((prev) => !prev)
              )}
              
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    

  )
}

export default App

