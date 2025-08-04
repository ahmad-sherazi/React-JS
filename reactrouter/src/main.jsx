import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Github from './components/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
