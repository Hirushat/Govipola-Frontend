import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import Banner from './components/homePage/banner'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className='flex flex-col'>
       <HomePage/>
    </div>
  )
}

export default App
