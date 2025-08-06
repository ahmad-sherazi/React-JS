import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Navbar from './components/navbar'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct'
import CategoryProduct from './pages/CategoryProduct'
import Footer from './components/Footer'
import axios from 'axios'

import './App.css'

function App() {
  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false)

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenDropdown(false)
      } catch (error) {
        console.log(error)
      }
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Routes>
        <Route path='/' element={<Home />} /> {/* 🟢 FIX: changed '' to '/' */}
        <Route path='about' element={<About />} />
        <Route path='cart' element={<Cart location={location} getLocation={getLocation} />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product' element={<Product />} />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='category/:category' element={<CategoryProduct />} /> {/* ✅ Category Route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
