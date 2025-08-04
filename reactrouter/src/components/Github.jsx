import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [git ,setGit] = useState([]);

     useEffect(()=>{
        fetch('https://api.github.com/users/ahmad-sherazi')
        .then(ab => ab.json())
        .then(data => {
            console.log(data);
            setGit(data)
        }
            
        )
    },[])


  return (

   
    <div>
        <h1>Github Name : {git.login}</h1>
    </div>
  )
}

export default Github