import React from 'react'
import Card from './components/Card'
import './App.css'
import First from './components/First'

function App() {
  return (
    <>
    <div>App</div>
    <Card name = "Leather Jacket" price = "99$" desc="Ahmad Bhai" btn1="purchase" btn2="Offer"/>
    <Card name = "Fire Jacket" price = "998$" desc="Ab Bhai" btn1="Fast" btn2="20% off" />
    <First name="Ali beding" price="0$"/>
    </>
  )
}

export default App