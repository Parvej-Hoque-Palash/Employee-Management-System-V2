import { Button } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-gray-700'>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App