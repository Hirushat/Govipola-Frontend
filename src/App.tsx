import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import Banner from './components/homePage/banner'
import HomePage from './pages/FarmerHomePage'
import AboutUs from './pages/AboutUs'
import SignUp from './pages/SignUp'
function App() {

  return (
    <div className='flex flex-col'>
       <SignUp/>
    </div>
  )
}

export default App
