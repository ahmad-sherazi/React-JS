import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'




// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path='' element={<Login />} />
//       <Route path='/profile' element={<Profile />} />
//     </>
//   )
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </StrictMode>,
)
